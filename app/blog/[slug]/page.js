import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import Footer from '@/components/Footer'
import ArtikelCard from '@/components/ArtikelCard'
import { getArtikelBySlug, getArtikelTerkait, getSemuaSlugArtikel } from '@/lib/sanity'
import { formatTanggal } from '@/lib/format'

export const revalidate = 60
// Artikel baru yang belum ada saat build tetap bisa dibuka
export const dynamicParams = true

export async function generateStaticParams() {
  try {
    const list = await getSemuaSlugArtikel()
    return list.map((a) => ({ slug: a.slug }))
  } catch (e) {
    return []
  }
}

export async function generateMetadata({ params }) {
  let a = null
  try { a = await getArtikelBySlug(params.slug) } catch (e) {}
  if (!a) return { title: 'Artikel tidak ditemukan' }
  return {
    title: a.judul,
    description: a.desc,
    openGraph: {
      title: a.judul,
      description: a.desc,
      type: 'article',
      publishedTime: a.tanggal,
      authors: a.penulis ? [a.penulis] : undefined,
      images: a.gambar ? [`${a.gambar}?w=1200&h=630&fit=crop&auto=format`] : undefined,
    },
  }
}

// Cara menampilkan isi artikel dari Sanity (teks, judul, gambar, link)
const komponenIsi = {
  types: {
    image: ({ value }) =>
      value?.url ? (
        <figure className="artikel-figure">
          <img src={`${value.url}?w=1200&auto=format`} alt={value.caption || ''} loading="lazy" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      ) : null,
    video: ({ value }) =>
      value?.url ? (
        <figure className="artikel-figure artikel-video">
          <video src={value.url} poster={value.poster || undefined} controls playsInline preload="metadata" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      ) : null,
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#'
      const eksternal = href.startsWith('http')
      return (
        <a href={href} {...(eksternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {children}
        </a>
      )
    },
  },
}

export default async function DetailArtikel({ params }) {
  let a = null
  try {
    a = await getArtikelBySlug(params.slug)
  } catch (e) {
    console.error('Gagal fetch artikel:', e)
  }
  if (!a) notFound()

  let terkait = []
  try {
    terkait = await getArtikelTerkait(a.slug, a.cat)
  } catch (e) {}

  const adaIsi = Array.isArray(a.body) && a.body.length > 0

  return (
    <div className="page">
      <section className="artikel-hero">
        <div className="artikel-hero-inner">
          <Link href={`/blog?kategori=${encodeURIComponent(a.cat)}`} className="artikel-kembali">
            ← {a.cat}
          </Link>
          <h1 className="artikel-judul">{a.judul}</h1>
          <p className="artikel-meta">
            {formatTanggal(a.tanggal)} · {a.penulis}
          </p>
        </div>
      </section>

      <article className="artikel-wrap">
        {a.gambar && (
          <img
            className="artikel-cover"
            src={`${a.gambar}?w=1400&auto=format`}
            alt={a.judul}
          />
        )}

        <p className="artikel-ringkasan">{a.desc}</p>

        {adaIsi && (
          <div className="artikel-isi">
            <PortableText value={a.body} components={komponenIsi} />
          </div>
        )}

        {a.linkEksternal && (
          <a
            href={a.linkEksternal}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary artikel-sumber"
          >
            Baca selengkapnya di sumber ↗
          </a>
        )}

        <div className="artikel-footer">
          <Link href="/blog" className="btn-outline">← Semua Publikasi</Link>
        </div>
      </article>

      {terkait.length > 0 && (
        <section className="section artikel-terkait">
          <div className="label">Baca Juga</div>
          <h2 className="section-title">{a.cat} Lainnya</h2>
          <div className="blog-grid" style={{ marginTop: '32px' }}>
            {terkait.map((t) => (
              <ArtikelCard artikel={t} key={t._id} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
