import Link from 'next/link'
import { formatTanggal, linkArtikel } from '@/lib/format'

// Pembungkus: link internal (halaman detail) atau eksternal (tab baru)
export function ArtikelLink({ artikel, className, children }) {
  const href = linkArtikel(artikel)
  if (artikel.linkEksternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default function ArtikelCard({ artikel }) {
  const a = artikel
  return (
    <ArtikelLink artikel={a} className="blog-card">
      <div className="blog-card-img">
        {a.gambar ? (
          <img src={`${a.gambar}?w=600&h=340&fit=crop&auto=format`} alt={a.judul} loading="lazy" />
        ) : (
          <span>✦</span>
        )}
      </div>
      <div className="blog-card-body">
        <div className="blog-cat">{a.cat}</div>
        <div className="blog-card-title">{a.judul}</div>
        <div className="blog-card-desc">{a.desc}</div>
        <div className="blog-card-meta">
          {formatTanggal(a.tanggal)} · {a.penulis}
        </div>
        <div className="blog-card-baca">
          {a.linkEksternal ? 'Baca di sumber ↗' : 'Baca selengkapnya →'}
        </div>
      </div>
    </ArtikelLink>
  )
}
