import Footer from '@/components/Footer'
import { getPrograms, getRiset } from '@/lib/sanity'

export const metadata = {
  title: 'Program & Riset',
}

export const revalidate = 60

export default async function Program() {
  let programs = []
  let riset = []

  try { programs = await getPrograms() } catch (e) { console.error(e) }
  try { riset = await getRiset() } catch (e) { console.error(e) }

  return (
    <div className="page">

      <section className="program-hero">
        <div className="program-hero-inner">
          <div className="label" style={{ background: 'var(--hitam)', color: 'var(--kuning)' }}>
            Program & Riset
          </div>
          <h1 className="display">Apa yang Kami<br />Kerjakan</h1>
          <p className="lead">
            Program utama yang menjadi tulang punggung kerja-kerja LII dalam
            mendorong perubahan berbasis bukti di Indonesia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="label">Program Utama</div>
        {programs.length === 0 ? (
          <p className="body-text" style={{ marginTop: '24px', color: 'var(--abu)' }}>
            Belum ada program.
          </p>
        ) : (
          <div className="program-list">
            {programs.map((p, i) => (
              <div className="program-item" key={p._id}>
                <div className="program-num">0{i + 1}</div>
                <div>
                  <h3 className="card-title" style={{ fontSize: '20px', marginBottom: '12px' }}>
                    {p.judul}
                  </h3>
                  <p className="body-text">{p.desc}</p>
                  <div className="program-tags">
                    {p.tags?.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="label">Riset</div>
        <h2 className="section-title">Proyek Riset Kami</h2>
        {riset.length === 0 ? (
          <p className="body-text" style={{ marginTop: '24px', color: 'var(--abu)' }}>
            Belum ada riset.
          </p>
        ) : (
          <div className="riset-grid">
            {riset.map((r) => (
              <div className="riset-card" key={r._id}>
                <span className={`riset-status ${r.status === 'Selesai' ? 'selesai' : ''}`}>
                  {r.status}
                </span>
                <h3 className="card-title">{r.judul}</h3>
                <p className="body-text" style={{ fontSize: '14px' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
