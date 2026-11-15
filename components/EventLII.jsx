import Link from 'next/link'
import { eventLokal } from '@/lib/eventLokal'
import { formatTanggal } from '@/lib/format'

// Tanggal hari ini di zona waktu WIB, format YYYY-MM-DD
function hariIniWIB() {
  return new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 10)
}

function statusEvent(e, hariIni) {
  const selesai = e.selesai || e.mulai
  if (hariIni < e.mulai) return 'akan'
  if (hariIni > selesai) return 'selesai'
  return 'berlangsung'
}

const labelStatus = {
  berlangsung: 'Berlangsung',
  akan: 'Akan Datang',
  selesai: 'Selesai',
}

function rentangTanggal(e) {
  if (!e.selesai || e.selesai === e.mulai) return formatTanggal(e.mulai)
  const [a, b] = [formatTanggal(e.mulai), formatTanggal(e.selesai)]
  const [da, ...ra] = a.split(' ')
  const [db, ...rb] = b.split(' ')
  return ra.join(' ') === rb.join(' ') ? `${da}–${db} ${rb.join(' ')}` : `${a} – ${b}`
}

export default function EventLII({ maks = 3 }) {
  const hariIni = hariIniWIB()
  const urutan = { berlangsung: 0, akan: 1, selesai: 2 }
  const daftar = eventLokal
    .map((e) => ({ ...e, status: statusEvent(e, hariIni) }))
    .sort((a, b) =>
      urutan[a.status] - urutan[b.status] ||
      (a.status === 'selesai' ? b.mulai.localeCompare(a.mulai) : a.mulai.localeCompare(b.mulai))
    )
    .slice(0, maks)

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
            <li key={e.judul}>
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
    </aside>
  )
}
