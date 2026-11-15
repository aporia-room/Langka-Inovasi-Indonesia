import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ksiczign',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// ── ARTIKEL / PUBLIKASI / BERITA ──
const artikelRingkas = `
  _id, judul, "slug": slug.current, cat, penulis, tanggal, desc, linkEksternal,
  "gambar": gambar.asset->url
`

export async function getArtikel() {
  return client.fetch(`
    *[_type == "artikel" && defined(slug.current)] | order(tanggal desc) {${artikelRingkas}}
  `)
}

// Hanya kategori "Berita" — dipakai di kolom berita beranda
export async function getBerita(limit = 3) {
  return client.fetch(
    `*[_type == "artikel" && cat == "Berita" && defined(slug.current)] | order(tanggal desc) [0...$limit] {${artikelRingkas}}`,
    { limit }
  )
}

// Satu artikel lengkap (dengan isi) untuk halaman detail
export async function getArtikelBySlug(slug) {
  return client.fetch(
    `*[_type == "artikel" && slug.current == $slug][0] {
      ${artikelRingkas},
      body[]{
        ...,
        _type == "image" => { ..., "url": asset->url }
      }
    }`,
    { slug }
  )
}

// Artikel lain dengan kategori sama (untuk "Baca juga")
export async function getArtikelTerkait(slug, cat, limit = 3) {
  return client.fetch(
    `*[_type == "artikel" && cat == $cat && slug.current != $slug && defined(slug.current)] | order(tanggal desc) [0...$limit] {${artikelRingkas}}`,
    { slug, cat, limit }
  )
}

export async function getSemuaSlugArtikel() {
  return client.fetch(
    `*[_type == "artikel" && defined(slug.current)] { "slug": slug.current, tanggal }`
  )
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
  return client.fetch(`
    *[_type == "tim"] | order(coalesce(urutan, 999) asc, _createdAt asc) {
      _id, nama, peran, inisial, profil,
      "foto": foto.asset->url
    }
  `)
}

// ── STATISTIK BERANDA ──
export async function getSiteStats() {
  return client.fetch(`
    *[_type == "siteStats"][0] {
      risetSelesai, programAktif, tahunBerdiri
    }
  `)
}
