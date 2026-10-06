'use client'

import { useEffect, useState } from 'react'

function inisialDari(t) {
  if (t.inisial) return t.inisial
  return (t.nama || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((k) => k[0])
    .join('')
    .toUpperCase()
}

function Avatar({ t, besar }) {
  const cls = besar ? 'tim-avatar tim-avatar-besar' : 'tim-avatar'
  if (t.foto) {
    return (
      <div className={cls}>
        <img src={`${t.foto}?w=${besar ? 320 : 200}&h=${besar ? 320 : 200}&fit=crop&auto=format`} alt={t.nama} />
      </div>
    )
  }
  return <div className={cls}>{inisialDari(t)}</div>
}

export default function TimGrid({ tim }) {
  const [aktif, setAktif] = useState(null)

  useEffect(() => {
    if (!aktif) return
    const tutup = (e) => e.key === 'Escape' && setAktif(null)
    document.addEventListener('keydown', tutup)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', tutup)
      document.body.style.overflow = ''
    }
  }, [aktif])

  return (
    <>
      <div className="tim-grid">
        {tim.map((t) => (
          <button type="button" className="tim-card" key={t._id} onClick={() => setAktif(t)}>
            <Avatar t={t} />
            <div className="tim-name">{t.nama}</div>
            <div className="tim-role">{t.peran}</div>
            {t.profil && <div className="tim-more">Lihat profil →</div>}
          </button>
        ))}
      </div>

      {aktif && (
        <div className="tim-modal-bg" onClick={() => setAktif(null)}>
          <div className="tim-modal" role="dialog" aria-modal="true" aria-label={aktif.nama} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="tim-modal-close" onClick={() => setAktif(null)} aria-label="Tutup">×</button>
            <Avatar t={aktif} besar />
            <div className="tim-role" style={{ marginTop: '4px' }}>{aktif.peran}</div>
            <h3 className="tim-modal-nama">{aktif.nama}</h3>
            <p className="body-text tim-modal-profil">
              {aktif.profil || 'Profil belum tersedia.'}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
