import Link from 'next/link'

// ── SEJARAH BERDIRINYA LII ──
// Ubah teks di bawah ini untuk memperbarui kolom sejarah di beranda.
// Setiap item: tahun/label singkat + keterangan.
const tonggak = [
  {
    waktu: 'Berdiri',
    teks: 'Langkah Inovasi Indonesia (LII) resmi berdiri sebagai perkumpulan pemuda yang berkedudukan di Palangka Raya, berasaskan Pancasila dan UUD 1945.',
  },
  {
    waktu: 'Bergerak',
    teks: 'LII menjadi mitra pelatihan kepemimpinan Kalteng Maju Festival (KAMU FEST): writing skills, leadership, design thinking, dan public speaking.',
  },
  {
    waktu: 'Kini',
    teks: 'Terus bertumbuh lewat riset, publikasi, dan program pemberdayaan untuk meningkatkan IPP dan IPM di Kalimantan Tengah.',
  },
]

export default function SejarahLII({ tahunBerdiri }) {
  return (
    <aside className="hero-sejarah" aria-labelledby="judul-sejarah">
      <div className="hero-sejarah-label">Sejarah</div>
      <h2 id="judul-sejarah" className="hero-sejarah-judul">
        Berdirinya <em>LII</em>
      </h2>
      {tahunBerdiri && (
        <p className="hero-sejarah-tahun">
          Sejak <strong>{tahunBerdiri}</strong>
        </p>
      )}
      <ol className="hero-sejarah-list">
        {tonggak.map((t) => (
          <li key={t.waktu}>
            <span className="hero-sejarah-waktu">
              {t.waktu === 'Berdiri' && tahunBerdiri ? tahunBerdiri : t.waktu}
            </span>
            <p>{t.teks}</p>
          </li>
        ))}
      </ol>
      <Link href="/tentang" className="hero-sejarah-link">
        Kenali LII lebih jauh →
      </Link>
    </aside>
  )
}
