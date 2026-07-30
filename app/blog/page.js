'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import { blogData } from '@/lib/data'

const kategori = ['Semua', 'Opini', 'Policy Brief', 'Berita', 'Riset']

export default function Blog() {
  const [filter, setFilter] = useState('Semua')

  const filtered =
    filter === 'Semua' ? blogData : blogData.filter((b) => b.cat === filter)

  const featured = blogData[0]

  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="label-outline">Publikasi & Berita</div>
          <h1 className="display">
            Ide & <em>Gagasan</em>
            <br />
            dari LII
          </h1>
          <p className="lead">
            Kumpulan opini, policy brief, laporan riset, dan berita terkini
            dari Langkah Inovasi Indonesia.
          </p>
        </div>
      </section>

      {/* ── KONTEN ── */}
      <section className="section">

        {/* Featured Article */}
        <div className="blog-featured">
          <div className="blog-featured-img">
            <span>✦</span>
          </div>
          <div className="blog-featured-content">
            <div className="label-outline">{featured.cat}</div>
            <h3>{featured.judul}</h3>
            <p>{featured.desc}</p>
            <p className="meta">
              {featured.tanggal} · {featured.penulis}
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="blog-filter">
          {kategori.map((k) => (
            <button
              key={k}
              className={`filter-btn ${filter === k ? 'active' : ''}`}
              onClick={() => setFilter(k)}
            >
              {k}
            </button>
          ))}
        </div>

        {/* Grid Artikel */}
        <div className="blog-grid">
          {filtered.map((b) => (
            <div className="blog-card" key={b.id}>
              <div className="blog-card-img">✦</div>
              <div className="blog-card-body">
                <div className="blog-cat">{b.cat}</div>
                <div className="blog-card-title">{b.judul}</div>
                <div className="blog-card-desc">{b.desc}</div>
                <div className="blog-card-meta">
                  {b.tanggal} · {b.penulis}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </div>
  )
}
