import Link from 'next/link'
import { daftarEvent, labelStatus, rentangTanggal } from '@/lib/event'

export default async function EventLII({ maks = 3 }) {
  const daftar = (await daftarEvent()).slice(0, maks)

  if (daftar.length === 0) return null

  return (
    <aside className="hero-event" aria-labelledby="judul-event">
      <div className="hero-sejarah-label">Agenda</div>
      <h2 id="judul-event" className="hero-sejarah-judul">
        <em>Event</em> LII
      </h2>
      <ul className="hero-event-list">
        {daftar.map((e) => {
          const isi = (
            <>
              <span className={`hero-event-status status-${e.status}`}>{labelStatus[e.status]}</span>
              <span className="hero-event-judul">{e.judul}</span>
              <span className="hero-event-meta">
                {rentangTanggal(e)}
                {e.waktu ? ` · ${e.waktu}` : ''}
              </span>
              {e.tempat && <span className="hero-event-meta">{e.tempat}</span>}
            </>
          )
          const luar = e.link && e.link.startsWith('http')
          return (
            <li key={e._id || e.judul}>
              {e.link ? (
                luar ? (
                  <a href={e.link} target="_blank" rel="noopener noreferrer" className="hero-event-item">{isi}</a>
                ) : (
                  <Link href={e.link} className="hero-event-item">{isi}</Link>
                )
              ) : (
                <div className="hero-event-item">{isi}</div>
              )}
            </li>
          )
        })}
      </ul>
      <Link href="/event" className="hero-sejarah-link">Lihat semua event →</Link>
    </aside>
  )
}
