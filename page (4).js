import Footer from '@/components/Footer'
import { timData } from '@/lib/data'

const misiList = [
  'Menghasilkan riset berkualitas tinggi yang relevan dengan kebutuhan masyarakat dan pembuat kebijakan.',
  'Membangun jembatan antara akademisi, pemerintah, dan masyarakat sipil dalam perumusan kebijakan.',
  'Mendorong lahirnya generasi pemikir muda yang kritis, inovatif, dan berintegritas.',
  'Memperkuat ekosistem demokrasi dan tata kelola pemerintahan yang transparan dan akuntabel.',
]

const nilaiList = [
  { n: 'Independensi', d: 'Bebas dari kepentingan politik dan korporasi. Analisis kami hanya tunduk pada fakta dan kebenaran.' },
  { n: 'Integritas', d: 'Kejujuran ilmiah dan etika riset adalah fondasi dari setiap karya yang kami hasilkan.' },
  { n: 'Kontekstualitas', d: 'Setiap rekomendasi berakar pada pemahaman mendalam tentang realitas lokal Kalimantan Tengah.' },
  { n: 'Kolaborasi', d: 'Perubahan terbaik lahir dari kerja bersama — dengan akademisi, pemerintah, dan masyarakat.' },
  { n: 'Inovasi', d: 'Kami mendorong pendekatan segar dalam menghadapi tantangan kebijakan yang kompleks.' },
  { n: 'Inklusivitas', d: 'Suara dari semua lapisan masyarakat, terutama yang terpinggirkan, penting dalam setiap analisis kami.' },
]

export const metadata = {
  title: 'Tentang Kami — LII',
  description: 'Langkah Inovasi Indonesia adalah think tank independen berbasis Kalimantan Tengah.',
}

export default function Tentang() {
  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="tentang-hero">
        <div className="tentang-hero-inner">
          <div className="label-outline">Tentang LII</div>
          <h1 className="display">
            Kami adalah <em>Langkah</em>
            <br />untuk Indonesia
          </h1>
          <p className="lead">
            Lembaga pemikir independen yang lahir dari semangat membangun
            narasi kebijakan berbasis riset dan keadilan untuk masyarakat
            Kalimantan Tengah dan Indonesia.
          </p>
        </div>
      </section>

      {/* ── VISI MISI ── */}
      <div className="visi-misi-grid">
        <div className="vm-card kuning-bg">
          <div className="label" style={{ background: 'var(--hitam)', color: 'var(--kuning)' }}>
            Visi
          </div>
          <h2 className="section-title">
            Menjadi pusat pemikiran terdepan yang melahirkan inovasi kebijakan
            untuk Indonesia yang adil dan berkelanjutan.
          </h2>
        </div>
        <div className="vm-card">
          <div className="label">Misi</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
            {misiList.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span
                  style={{
                    background: 'var(--kuning)',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: '800',
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                <p className="body-text">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SEJARAH ── */}
      <section className="section">
        <div className="label">Sejarah</div>
        <h2 className="section-title">Perjalanan LII</h2>
        <div style={{ maxWidth: '680px' }}>
          <p className="body-text" style={{ marginBottom: '16px' }}>
            Langkah Inovasi Indonesia (LII) berdiri sebagai respons terhadap
            kebutuhan akan lembaga pemikir independen yang berakar pada konteks
            lokal Kalimantan Tengah. Didirikan oleh sekelompok akademisi dan
            aktivis muda yang percaya bahwa kebijakan terbaik lahir dari riset
            yang jujur dan dialog yang terbuka.
          </p>
          <p className="body-text">
            Di bawah kepemimpinan Hafidz Ridha Try Sjahputra, LII telah
            berkembang menjadi wadah kolaborasi lintas disiplin — menghubungkan
            hukum, ilmu sosial, ekonomi, dan teknologi dalam satu kerangka
            analisis kebijakan yang komprehensif.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* ── TIM ── */}
      <section className="section">
        <div className="label">Tim Kami</div>
        <h2 className="section-title">Orang-Orang di Balik LII</h2>
        <div className="tim-grid">
          {timData.map((t) => (
            <div className="tim-card" key={t.nama}>
              <div className="tim-avatar">{t.inisial}</div>
              <div className="tim-name">{t.nama}</div>
              <div className="tim-role">{t.peran}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NILAI ── */}
      <section
        className="section"
        style={{ background: 'var(--abu-muda)', maxWidth: '100%', padding: '80px 48px' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="label">Nilai</div>
          <h2 className="section-title">Yang Kami Pegang Teguh</h2>
          <div className="nilai-grid">
            {nilaiList.map((n) => (
              <div className="nilai-card" key={n.n}>
                <h3 className="card-title">{n.n}</h3>
                <p className="body-text">{n.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
