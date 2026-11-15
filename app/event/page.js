import Link from 'next/link'
import Footer from '@/components/Footer'
import { daftarEvent, labelStatus, rentangTanggal } from '@/lib/event'

export const metadata = {
  title: 'Event',
  description: 'Agenda dan kegiatan Langkah Inovasi Indonesia: yang sedang berlangsung, akan datang, dan telah selesai.',
}

// Perbarui status event (berlangsung/selesai) secara berkala
export const revalidate = 3600

const kelompok = [
  { status: 'berlangsung', judul: 'Sedang Berlangsung' },
  { status: 'akan', judul: 'Akan Datang' },
  { status: 'selesai', judul: 'Telah Berlangsung' },
]

function KartuEvent({ e }) {
  const isi = (
    <>
      <span className={`hero-event-status status-${e.status}`}>{labelStatus[e.status]}</span>
      <h3 className="event-card-judul">{e.judul}</h3>
      <div className="event-card-meta">
        <span>{rentangTanggal(e)}</span>
        {e.waktu && <span>{e.waktu}</span>}
        {e.tempat && <span>{e.tempat}</span>}
      </div>
      {e.link && <span className="event-card-baca">Selengkapnya →</span>}
    </>
  )
  if (!e.link) return <div className="event-card">{isi}</div>
  if (e.link.startsWith('http')) {
    return <a href={e.link} target="_blank" rel="noopener noreferrer" className="event-card">{isi}</a>
  }
  return <Link href={e.link} className="event-card">{isi}</Link>
}

export default function EventPage() {
  const semua = daftarEvent()

  return (
    <div className="page">
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="label-outline">Agenda LII</div>
          <h1 className="display">
            <em>Event</em> &amp; Kegiatan
          </h1>
          <p className="lead">
            Ikuti kegiatan Langkah Inovasi Indonesia: diskusi, pelatihan, rekrutmen,
            dan berbagai ruang bertumbuh bagi pemuda Kalimantan Tengah.
          </p>
        </div>
      </section>

      <section className="section">
        {kelompok.map(({ status, judul }) => {
          const daftar = semua.filter((e) => e.status === status)
          if (daftar.length === 0) return null
          return (
            <div key={status} className="event-kelompok">
              <h2 className="event-kelompok-judul">{judul}</h2>
              <div className="event-grid">
                {daftar.map((e) => (
                  <KartuEvent key={e.judul} e={e} />
                ))}
              </div>
            </div>
          )
        })}
        {semua.length === 0 && (
          <p className="body-text" style={{ color: 'var(--abu)' }}>Belum ada event.</p>
        )}
      </section>

      <Footer />
    </div>
  )
}
