import Footer from '@/components/Footer'
import { getTim } from '@/lib/sanity'

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

export const metadata = { title: 'Tentang Kami — LII' }

export const revalidate = 60

export default async function Tentang() {
  let tim = []
  try { tim = await getTim() } catch (e) { console.error(e) }

  return (
    <div className="page">
      <section className="tentang-hero">
        <div className="tentang-hero-inner">
          <div className="label-outline">Tentang LII</div>
          <h1 className="display">Kami adalah <em>Langkah</em><br />untuk Indonesia</h1>
          <p className="lead">
            Lembaga pemikir independen yang lahir dari semangat membangun narasi kebijakan
            berbasis riset dan keadilan untuk masyarakat Kalimantan Tengah dan Indonesia.
          </p>
        </div>
      </section>

      <div className="visi-misi-grid">
        <div className="vm-card kuning-bg">
          <div className="label" style={{ background: 'var(--hitam)', color: 'var(--kuning)' }}>Visi</div>
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
                <span style={{ background: 'var(--kuning)', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800', flexShrink: 0 }}>
                  {i + 1}
                </span>
                <p className="body-text">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="label">Tim Kami</div>
        <h2 className="section-title">Orang-Orang di Balik LII</h2>
        {tim.length === 0 ? (
          <p className="body-text" style={{ marginTop: '24px', color: 'var(--abu)' }}>
            Belum ada anggota tim. Tambahkan di Sanity Studio!
          </p>
        ) : (
          <div className="tim-grid">
            {tim.map((t) => (
              <div className="tim-card" key={t._id}>
                <div className="tim-avatar">{t.inisial}</div>
                <div className="tim-name">{t.nama}</div>
                <div className="tim-role">{t.peran}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section style={{ background: 'var(--abu-muda)', maxWidth: '100%', padding: '80px 48px' }}>
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
