import Footer from '@/components/Footer'
import { getTim } from '@/lib/sanity'
import TimGrid from '@/components/TimGrid'

const misiList = [
  'Meningkatkan Indeks Pembangunan Pemuda (IPP) melalui program yang berfokus pada inovasi, kreativitas, dan partisipasi pemuda.',
  'Meningkatkan Indeks Pembangunan Manusia (IPM) dengan fokus pada edukasi, kesehatan, dan kesejahteraan ekonomi bagi pemuda dan masyarakat.',
  'Menjadi wadah bagi pemuda untuk mengembangkan potensi diri, kepemimpinan, dan jejaring, serta mendukung peningkatan ekonomi keluarga demi kesejahteraan para anggota.',
]

const nilaiList = [
  { n: 'Sayap Emas', d: 'Melambangkan kecepatan, inovasi, dan kemajuan, sekaligus harapan tinggi untuk membawa Indonesia terbang menuju masa depan yang lebih baik.' },
  { n: 'Peta Indonesia', d: 'Titik-titik kepulauan menggambarkan kesatuan dalam keberagaman: masyarakat yang beragam, saling terhubung, dan bersatu dalam satu tujuan.' },
  { n: 'Langkah', d: 'Menunjukkan tindakan nyata dan progresif. Bukan hanya ide, tetapi juga pelaksanaan yang terukur.' },
  { n: 'Inovasi', d: 'Kata kunci utama yang menjadi landasan: komitmen menciptakan ide, metode, atau produk baru yang membawa manfaat signifikan.' },
  { n: 'Indonesia', d: 'Menegaskan bahwa semua langkah dan inovasi ditujukan untuk kemajuan bangsa dan negara Indonesia secara keseluruhan.' },
]

export const metadata = { title: 'Tentang Kami' }

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
            Perkumpulan yang menghimpun dan memberdayakan pemuda Indonesia untuk berperan
            aktif dalam pembangunan melalui pendekatan inovatif dan kolaboratif,
            berkedudukan di Palangka Raya, Kalimantan Tengah.
          </p>
        </div>
      </section>

      <div className="visi-misi-grid">
        <div className="vm-card kuning-bg">
          <div className="label" style={{ background: 'var(--hitam)', color: 'var(--kuning)' }}>Landasan</div>
          <h2 className="section-title">
            Berasaskan Pancasila dan Undang-Undang Dasar 1945, LII hadir sebagai wadah
            pemuda untuk mengambil langkah nyata yang inovatif bagi kemajuan Indonesia.
          </h2>
        </div>
        <div className="vm-card">
          <div className="label">Maksud & Tujuan</div>
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
            Informasi pengurus akan segera hadir.
          </p>
        ) : (
          <TimGrid tim={tim} />
        )}
      </section>

      <section style={{ background: 'var(--abu-muda)', maxWidth: '100%', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="label">Lambang</div>
          <h2 className="section-title">Makna di Balik Lambang LII</h2>
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
