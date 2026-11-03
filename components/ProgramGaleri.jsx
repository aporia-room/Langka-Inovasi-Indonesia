'use client'

import { useEffect, useState } from 'react'

export default function ProgramGaleri({ judul, foto }) {
  const [buka, setBuka] = useState(null)

  useEffect(() => {
    if (buka === null) return
    const tombol = (e) => {
      if (e.key === 'Escape') setBuka(null)
      if (e.key === 'ArrowRight') setBuka((i) => (i + 1) % foto.length)
      if (e.key === 'ArrowLeft') setBuka((i) => (i - 1 + foto.length) % foto.length)
    }
    document.addEventListener('keydown', tombol)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', tombol)
      document.body.style.overflow = ''
    }
  }, [buka, foto.length])

  return (
    <>
      <div className="galeri">
        {foto.map((url, i) => (
          <button
            type="button"
            className="galeri-thumb"
            key={url}
            onClick={() => setBuka(i)}
            aria-label={`Lihat foto ${i + 1} ${judul}`}
          >
            <img src={`${url}?w=200&h=200&fit=crop&auto=format`} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      {buka !== null && (
        <div className="galeri-bg" role="dialog" aria-modal="true" aria-label={`Galeri ${judul}`} onClick={() => setBuka(null)}>
          <img
            src={`${foto[buka]}?w=1600&auto=format`}
            alt={`Foto ${buka + 1} kegiatan ${judul}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button type="button" className="galeri-btn galeri-tutup" onClick={() => setBuka(null)} aria-label="Tutup">×</button>
          {foto.length > 1 && (
            <>
              <button
                type="button"
                className="galeri-btn galeri-prev"
                onClick={(e) => { e.stopPropagation(); setBuka((buka - 1 + foto.length) % foto.length) }}
                aria-label="Foto sebelumnya"
              >‹</button>
              <button
                type="button"
                className="galeri-btn galeri-next"
                onClick={(e) => { e.stopPropagation(); setBuka((buka + 1) % foto.length) }}
                aria-label="Foto berikutnya"
              >›</button>
            </>
          )}
          <div className="galeri-hitung">{buka + 1} / {foto.length}</div>
        </div>
      )}
    </>
  )
}
