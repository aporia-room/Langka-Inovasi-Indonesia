import Footer from '@/components/Footer'
import { programData, risetData } from '@/lib/data'

export const metadata = {
  title: 'Program & Riset — LII',
  description: 'Lima program utama LII dalam mendorong perubahan berbasis bukti di Indonesia.',
}

export default function Program() {
  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="program-hero">
        <div className="program-hero-inner">
          <div className="label" style={{ background: 'var(--hitam)', color: 'var(--kuning)' }}>
            Program & Riset
          </div>
          <h1 className="display">
            Apa yang Kami
            <br />
            Kerjakan
          </h1>
          <p className="lead">
            Lima program utama yang menjadi tulang punggung kerja-kerja LII
            dalam mendorong perubahan berbasis bukti di Indonesia.
          </p>
        </div>
      </section>

      {/* ── PROGRAM LIST ── */}
      <section className="section">
        <div className="label">Program Utama</div>
        <div className="program-list">
          {programData.map((p, i) => (
            <div className="program-item" key={p.judul}>
              <div className="program-num">0{i + 1}</div>
              <div>
                <h3 className="card-title" style={{ fontSize: '20px', marginBottom: '12px' }}>
                  {p.judul}
                </h3>
                <p className="body-text">{p.desc}</p>
                <div className="program-tags">
                  {p.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── RISET AKTIF ── */}
      <section className="section">
        <div className="label">Riset</div>
        <h2 className="section-title">Proyek Riset Kami</h2>
        <div className="riset-grid">
          {risetData.map((r) => (
            <div className="riset-card" key={r.judul}>
              <span className={`riset-status ${r.status === 'Selesai' ? 'selesai' : ''}`}>
                {r.status}
              </span>
              <h3 className="card-title">{r.judul}</h3>
              <p className="body-text" style={{ fontSize: '14px' }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
