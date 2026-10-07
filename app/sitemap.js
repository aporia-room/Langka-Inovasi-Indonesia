const BASE = 'https://www.langkahinovasiindonesia.or.id'

export default function sitemap() {
  const now = new Date()
  return ['', '/tentang', '/program', '/blog', '/kontak'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === '' || path === '/blog' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
