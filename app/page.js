import Link from 'next/link'
import Footer from '@/components/Footer'
import { blogData } from '@/lib/data'

const pilar = [
  {
    n: '1',
    judul: 'Riset & Kajian',
    desc: 'Menghasilkan penelitian mendalam tentang isu kebijakan publik, hukum, dan sosial yang relevan dengan konteks lokal Kalimantan Tengah dan nasional.',
  },
  {
    n: '2',
    judul: 'Advokasi Kebijakan',
    desc: 'Menyuarakan rekomendasi berbasis data kepada pemangku kepentingan — dari pemerintah daerah hingga legislatif — untuk mendorong perubahan nyata.',
  },
  {
    n: '3',
    judul: 'Pengembangan Kapasitas',
    desc: 'Membangun ekosistem intelektual dengan melatih generasi muda agar mampu berpikir kritis, menganalisis kebijakan, dan berkontribusi aktif.',
  },
]

export default function Home() {
  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="label-outline">Think Tank · Kalimantan Tengah</div>
          <h1 className="display">
            Inovasi Dimulai dari<br />
            <em>Pikiran yang Berani</em>
          </h1>
          <p className="lead">
            LII adalah lembaga pemikir independen yang menghasilkan riset,
            kajian kebijakan, dan rekomendasi berbasis bukti untuk mendorong
            kemajuan Indonesia.
          </p>
          <div className="hero-btns">
            <Link href="/program" className="btn-primary">
              Lihat Program Kami
            </Link>
            <Link
              href="/blog"
              className="btn-outline"
              style={{ color: '#CCCCCC', borderColor: '#444444' }}
            >
              Baca Publikasi
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">12+</div>
              <div className="stat-label">Riset Selesai</div>
            </div>
            <div className="stat-item" style={{ paddingLeft: '32px' }}>
              <div className="stat-num">5</div>
              <div className="stat-label">Program Aktif</div>
            </div>
            <div className="stat-item" style={{ paddingLeft: '32px' }}>
              <div className="stat-num">3+</div>
              <div className="stat-label">Tahun Berdiri</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIGA PILAR ── */}
      <section className="home-focus">
        <div className="section">
          <div className="label">Fokus Utama</div>
          <h2 className="section-title">Tiga Pilar Kerja LII</h2>
          <div className="focus-grid" style={{ marginTop: '40px' }}>
            {pilar.map((f) => (
              <div className="focus-card" key={f.n}>
                <div className="focus-num">{f.n}</div>
                <h3 className="card-title">{f.judul}</h3>
                <p className="body-text">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUBLIKASI TERBARU ── */}
      <div className="home-latest">
        <div className="label">Terbaru</div>
        <h2 className="section-title">Publikasi & Berita</h2>
        <div className="latest-grid">
          {blogData.slice(0, 4).map((b) => (
            <Link href="/blog" key={b.id} className="latest-card">
              <div className="latest-tag">{b.cat}</div>
              <h3 className="card-title">{b.judul}</h3>
              <p className="body-text" style={{ fontSize: '14px' }}>
                {b.desc}
              </p>
              <div className="latest-date">
                {b.tanggal} · {b.penulis}
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '32px' }}>
          <Link href="/blog" className="btn-outline">
            Lihat Semua Publikasi →
          </Link>
        </div>
      </div>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--kuning)', padding: '64px 48px' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '32px',
                color: 'var(--hitam)',
                marginBottom: '8px',
              }}
            >
              Bergabung & Berkolaborasi
            </h2>
            <p style={{ color: 'var(--hitam-lunak)', fontSize: '15px' }}>
              Kami terbuka untuk kemitraan riset, kolaborasi akademik, dan
              keterlibatan aktif.
            </p>
          </div>
          <Link href="/kontak" className="btn-outline">
            Hubungi Kami
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
