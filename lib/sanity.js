import { timTambahan, sisipanProfil, profilCadangan } from './timLokal'
import { beritaLokal, beritaLokalRingkas } from './beritaLokal'
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ksiczign',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// ── ARTIKEL / PUBLIKASI / BERITA ──
// Artikel berasal dari dua sumber: Sanity dan berita lokal (lib/beritaLokal.js).

const artikelRingkas = `
  _id, judul, "slug": slug.current, cat, penulis, tanggal, desc, linkEksternal,
  "gambar": gambar.asset->url
`

// Gabungkan artikel Sanity + lokal, urutkan dari yang terbaru
function gabung(dariSanity, lokal) {
  // Artikel lokal bertanda `timpaSanity` menggantikan artikel Sanity dengan slug yang sama
  const slugTimpa = new Set(lokal.filter((a) => a.timpaSanity).map((a) => a.slug))
  const sanity = dariSanity.filter((a) => !slugTimpa.has(a.slug))
  const slugSanity = new Set(sanity.map((a) => a.slug))
  return [...sanity, ...lokal.filter((a) => !slugSanity.has(a.slug))].sort((a, b) =>
    (b.tanggal || '').localeCompare(a.tanggal || '')
  )
}

async function ambilSanity(query, params) {
  try {
    return (await client.fetch(query, params)) || []
  } catch (e) {
    console.error('Gagal fetch dari Sanity:', e)
    return []
  }
}

export async function getArtikel() {
  const dariSanity = await ambilSanity(
    `*[_type == "artikel" && defined(slug.current)] | order(tanggal desc) {${artikelRingkas}}`
  )
  return gabung(dariSanity, beritaLokalRingkas)
}

// Hanya kategori "Berita" — dipakai di kolom berita beranda
export async function getBerita(limit = 3) {
  const semua = await getArtikel()
  return semua.filter((a) => a.cat === 'Berita').slice(0, limit)
}

// Satu artikel lengkap (dengan isi) untuk halaman detail
export async function getArtikelBySlug(slug) {
  const lokalTimpa = beritaLokal.find((a) => a.slug === slug && a.timpaSanity)
  if (lokalTimpa) return lokalTimpa
  const dariSanity = await client
    .fetch(
      `*[_type == "artikel" && slug.current == $slug][0] {
        ${artikelRingkas},
        body[]{
          ...,
          _type == "image" => { ..., "url": asset->url }
        }
      }`,
      { slug }
    )
    .catch((e) => {
      console.error('Gagal fetch artikel dari Sanity:', e)
      return null
    })
  return dariSanity || beritaLokal.find((a) => a.slug === slug) || null
}

// Artikel lain dengan kategori sama (untuk "Baca juga")
export async function getArtikelTerkait(slug, cat, limit = 3) {
  const semua = await getArtikel()
  return semua.filter((a) => a.cat === cat && a.slug !== slug).slice(0, limit)
}

export async function getSemuaSlugArtikel() {
  const semua = await getArtikel()
  return semua.map((a) => ({ slug: a.slug, tanggal: a.tanggal }))
}

// ── PROGRAM ──
export async function getPrograms() {
  return client.fetch(`
    *[_type == "program"] | order(_createdAt asc) {
      _id, judul, desc, tags,
      "gambar": gambar.asset->url,
      "galeri": galeri[].asset->url
    }
  `)
}

// ── RISET ──
// Riset berasal dari dua sumber: dokumen "Riset" dan artikel berkategori "Riset".
// Artikel berkategori Riset tampil sebagai riset selesai yang bisa dibaca.
export async function getRiset() {
  const dokumen = await ambilSanity(`
    *[_type == "riset"] | order(_createdAt desc) {
      _id, judul, status, desc
    }
  `)
  const artikel = (await getArtikel())
    .filter((a) => a.cat === 'Riset')
    .map((a) => ({
      _id: a._id,
      judul: a.judul,
      status: 'Selesai',
      desc: a.desc,
      href: a.linkEksternal || `/blog/${a.slug}`,
    }))
  return [...artikel, ...dokumen]
}

// ── TIM ──
export async function getTim() {
  const tim = await client.fetch(`
    *[_type == "tim"] | order(coalesce(urutan, 999) asc, _createdAt asc) {
      _id, nama, peran, inisial, profil, urutan,
      "foto": foto.asset->url
    }
  `)
  // Profil cadangan dari lib/timLokal.js dipakai kalau kolom Profil Singkat di Sanity masih kosong
  const lokalById = Object.fromEntries(timTambahan.map((t) => [t._id, t]))
  const dariSanity = (tim || []).map((t) => {
    if (!t.profil && lokalById[t._id]?.profil) return { ...t, profil: lokalById[t._id].profil }
    if (!t.profil && profilCadangan[t._id]) return { ...t, profil: profilCadangan[t._id] }
    if (t.profil && sisipanProfil[t._id]) {
      const profil = sisipanProfil[t._id].reduce((teks, [lama, baru]) => teks.replace(lama, baru), t.profil)
      return { ...t, profil }
    }
    return t
  })
  // Cadangan: anggota di lib/timLokal.js hanya dipakai kalau belum ada di Sanity (id sama)
  const idSanity = new Set(dariSanity.map((t) => t._id))
  const cadangan = timTambahan.filter((t) => !idSanity.has(t._id))
  return [...dariSanity, ...cadangan].sort((a, b) => (a.urutan ?? 999) - (b.urutan ?? 999))
}

// ── STATISTIK BERANDA ──
export async function getSiteStats() {
  return client.fetch(`
    *[_type == "siteStats"][0] {
      risetSelesai, eventTerlaksana, programAktif, tahunBerdiri
    }
  `)
}

// ── EVENT ──
export async function getEventSanity() {
  return ambilSanity(`
    *[_type == "event" && defined(mulai)] | order(mulai asc) {
      _id, judul, mulai, selesai, waktu, tempat, link
    }
  `)
}
