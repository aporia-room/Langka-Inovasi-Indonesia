import Footer from '@/components/Footer'
import ArtikelCard from '@/components/ArtikelCard'
import { getArtikel } from '@/lib/sanity'
import { jurnalLokal } from '@/lib/jurnalLokal'

export const metadata = {
  title: 'Jurnal',
  description:
    'Jurnal dan publikasi ilmiah Langkah Inovasi Indonesia: riset, policy brief, dan artikel ilmiah tentang kebijakan, pembangunan daerah, dan kepemudaan di Kalimantan Tengah.',
}

export const revalidate = 60

const EMAIL = 'langkahinovasiindonesia2030@gmail.com'

function KartuJurnal({ a }) {
  return (
    <article className="jurnal-card">
      {a.edisi && <span className="jurnal-edisi">{a.edisi}</span>}
      <h3 className="jurnal-judul">{a.judul}</h3>
      {a.penulis && <p className="jurnal-penulis">{a.penulis}</p>}
      {a.abstrak && <p className="jurnal-abstrak">{a.abstrak}</p>}
      {a.kataKunci?.length > 0 && (
        <p className="jurnal-kunci"><b>Kata kunci:</b> {a.kataKunci.join(', ')}</p>
      )}
      <div className="jurnal-aksi">
        {a.pdf && <a href={a.pdf} target="_blank" rel="noopener noreferrer" className="btn-primary">Unduh PDF</a>}
        {a.doi && <a href={a.doi} target="_blank" rel="noopener noreferrer" className="btn-outline">DOI</a>}
      </div>
    </article>
  )
}

export default async function JurnalPage() {
  const semua = await getArtikel()
  const ilmiah = semua.filter((a) => a.cat === 'Riset' || a.cat === 'Policy Brief')

  return (
    <div className="page">
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="label-outline">Publikasi Ilmiah</div>
          <h1 className="display">
            <em>Jurnal</em> LII
          </h1>
          <p className="lead">
            Ruang publikasi ilmiah Langkah Inovasi Indonesia untuk gagasan, riset, dan kajian kebijakan
            dari dan untuk Kalimantan Tengah.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="event-kelompok-judul">Artikel Jurnal</h2>
        {jurnalLokal.length > 0 ? (
          <div className="jurnal-list">
            {jurnalLokal.map((a) => (
              <KartuJurnal key={a.judul} a={a} />
            ))}
          </div>
        ) : (
          <div className="jurnal-kosong">
            <h3>Edisi perdana sedang dipersiapkan</h3>
            <p>
              Jurnal LII sedang menyiapkan edisi pertamanya. Sambil menunggu, baca riset dan policy brief
              LII di bawah ini, atau kirimkan naskah terbaikmu untuk dipertimbangkan.
            </p>
          </div>
        )}
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="event-kelompok-judul">Riset &amp; Policy Brief LII</h2>
        {ilmiah.length === 0 ? (
          <p className="body-text" style={{ color: 'var(--abu)' }}>Belum ada publikasi.</p>
        ) : (
          <div className="blog-grid" style={{ marginTop: '24px' }}>
            {ilmiah.map((a) => (
              <ArtikelCard artikel={a} key={a._id} />
            ))}
          </div>
        )}
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="jurnal-cfp">
          <div>
            <div className="label-outline">Call for Papers</div>
            <h2 className="jurnal-cfp-judul">Kirim naskahmu ke Jurnal LII</h2>
            <p className="body-text">
              Kami menerima artikel hasil penelitian, kajian kebijakan, dan pemikiran konseptual, terutama
              yang berkaitan dengan kebijakan publik, pembangunan daerah, kepemudaan, lingkungan, serta
              sosial budaya Kalimantan Tengah.
            </p>
          </div>
          <ul className="jurnal-syarat">
            <li>Naskah orisinal dan belum pernah dipublikasikan di tempat lain.</li>
            <li>Ditulis dalam bahasa Indonesia atau bahasa Inggris.</li>
            <li>Memuat judul, abstrak, kata kunci, pendahuluan, metode, pembahasan, kesimpulan, dan daftar pustaka.</li>
            <li>Sitasi menggunakan manajer referensi seperti Mendeley atau Zotero.</li>
            <li>Bebas plagiarisme.</li>
          </ul>
          <a href={`mailto:${EMAIL}?subject=Pengiriman%20Naskah%20Jurnal%20LII`} className="btn-primary">
            Kirim Naskah via Email
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
