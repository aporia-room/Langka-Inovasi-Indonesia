'use client'

import { useEffect, useState } from 'react'
import ArtikelCard, { ArtikelLink } from '@/components/ArtikelCard'
import { formatTanggal } from '@/lib/format'

const kategoriList = ['Semua', 'Opini', 'Policy Brief', 'Berita', 'Riset']

export default function BlogContent({ posts }) {
  const [filter, setFilter] = useState('Semua')

  // Mendukung tautan seperti /blog?kategori=Berita
  useEffect(() => {
    const k = new URLSearchParams(window.location.search).get('kategori')
    if (k && kategoriList.includes(k)) setFilter(k)
  }, [])

  const filtered =
    filter === 'Semua' ? posts : posts.filter((p) => p.cat === filter)

  // Artikel utama = artikel terbaru dari kategori yang sedang dipilih
  const featured = filtered[0]
  const sisanya = filtered.slice(1)

  return (
    <section className="section">

      {/* Filter */}
      <div className="blog-filter">
        {kategoriList.map((k) => (
          <button
            key={k}
            className={`filter-btn ${filter === k ? 'active' : ''}`}
            onClick={() => setFilter(k)}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Featured */}
      {featured && (
        <ArtikelLink artikel={featured} className="blog-featured">
          <div className="blog-featured-img">
            {featured.gambar ? (
              <img
                src={`${featured.gambar}?w=900&h=600&fit=crop&auto=format`}
                alt={featured.judul}
              />
            ) : (
              <span>✦</span>
            )}
          </div>
          <div className="blog-featured-content">
            <div className="label-outline">{featured.cat}</div>
            <h3>{featured.judul}</h3>
            <p>{featured.desc}</p>
            <p className="meta">
              {formatTanggal(featured.tanggal)} · {featured.penulis}
            </p>
            <div className="blog-featured-baca">
              {featured.linkEksternal ? 'Baca di sumber ↗' : 'Baca selengkapnya →'}
            </div>
          </div>
        </ArtikelLink>
      )}

      {/* Grid Artikel */}
      <div className="blog-grid">
        {sisanya.map((b) => (
          <ArtikelCard artikel={b} key={b._id} />
        ))}
        {filtered.length === 0 && (
          <p style={{ color: 'var(--abu)', gridColumn: '1/-1', padding: '40px 0' }}>
            Belum ada artikel untuk kategori ini.
          </p>
        )}
      </div>

    </section>
  )
}
