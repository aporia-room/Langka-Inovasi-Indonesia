import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ksiczign',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// ── ARTIKEL / PUBLIKASI ──
export async function getArtikel() {
  return client.fetch(`
    *[_type == "artikel"] | order(tanggal desc) {
      _id, judul, slug, cat, penulis, tanggal, desc, linkEksternal
    }
  `)
}

// ── PROGRAM ──
export async function getPrograms() {
  return client.fetch(`
    *[_type == "program"] | order(_createdAt asc) {
      _id, judul, desc, tags
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
