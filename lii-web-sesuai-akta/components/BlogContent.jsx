'use client'

import { useState } from 'react'

const kategoriList = ['Semua', 'Opini', 'Policy Brief', 'Berita', 'Riset']

export default function BlogContent({ posts }) {
  const [filter, setFilter] = useState('Semua')

  const filtered =
    filter === 'Semua' ? posts : posts.filter((p) => p.cat === filter)

  const featured = posts[0]

  return (
    <section className="section">

      {/* Featured */}
      {featured && (
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
      )}

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

      {/* Grid Artikel */}
      <div className="blog-grid">
        {filtered.map((b) => (
          <div className="blog-card" key={b._id}>
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
        {filtered.length === 0 && (
          <p style={{ color: 'var(--abu)', gridColumn: '1/-1', padding: '40px 0' }}>
            Belum ada artikel untuk kategori ini.
          </p>
        )}
      </div>

    </section>
  )
}
