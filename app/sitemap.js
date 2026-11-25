import { getSemuaSlugArtikel } from '@/lib/sanity'

const BASE = 'https://www.langkahinovasiindonesia.or.id'

export const revalidate = 3600

export default async function sitemap() {
  const now = new Date()
  const halaman = ['', '/tentang', '/program', '/blog', '/jurnal', '/event', '/kontak', '/daftar'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === '' || path === '/blog' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))

  let artikel = []
  try {
    const list = await getSemuaSlugArtikel()
    artikel = list.map((a) => ({
      url: `${BASE}/blog/${a.slug}`,
      lastModified: a.tanggal ? new Date(a.tanggal) : now,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch (e) {}

  return [...halaman, ...artikel]
}
