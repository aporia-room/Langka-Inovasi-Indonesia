// Ubah "2026-11-15" menjadi "15 November 2026"
export function formatTanggal(tanggal) {
  if (!tanggal) return ''
  const d = new Date(`${tanggal}T00:00:00`)
  if (isNaN(d)) return tanggal
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

// Alamat yang dituju saat kartu artikel diklik
export function linkArtikel(a) {
  return a.linkEksternal || `/blog/${a.slug}`
}
