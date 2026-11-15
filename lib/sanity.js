import { timLokal, timTambahan } from './timLokal'
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
  const slugSanity = new Set(dariSanity.map((a) => a.slug))
  return [...dariSanity, ...lokal.filter((a) => !slugSanity.has(a.slug))].sort((a, b) =>
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
export async function getRiset() {
  return client.fetch(`
    *[_type == "riset"] | order(_createdAt desc) {
      _id, judul, status, desc
    }
  `)
}

// ── TIM ──
export async function getTim() {
  const tim = await client.fetch(`
    *[_type == "tim"] | order(coalesce(urutan, 999) asc, _createdAt asc) {
      _id, nama, peran, inisial, profil, urutan,
      "foto": foto.asset->url
    }
  `)
  // Terapkan perubahan dan tambahan yang diatur di lib/timLokal.js
  const dariSanity = (tim || []).map((t) => (timLokal[t._id] ? { ...t, ...timLokal[t._id] } : t))
  return [...dariSanity, ...timTambahan].sort((a, b) => (a.urutan ?? 999) - (b.urutan ?? 999))
}

// ── STATISTIK BERANDA ──
export async function getSiteStats() {
  return client.fetch(`
    *[_type == "siteStats"][0] {
      risetSelesai, programAktif, tahunBerdiri
    }
  `)
}
