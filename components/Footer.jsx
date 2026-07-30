import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/program', label: 'Program & Riset' },
  { href: '/blog', label: 'Publikasi' },
  { href: '/kontak', label: 'Kontak' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>LII</span> — Langkah Inovasi Indonesia
            </div>
            <p className="footer-desc">
              Think tank independen berbasis di Kalimantan Tengah yang
              berkomitmen menghasilkan riset, kajian, dan rekomendasi kebijakan
              untuk Indonesia yang lebih baik.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigasi</h4>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Kontak</h4>
            <a>Palangka Raya, Kalimantan Tengah</a>
            <a href="mailto:info@lii-indonesia.org">info@lii-indonesia.org</a>
            <a>@lii.indonesia</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 <span className="footer-kuning">Langkah Inovasi Indonesia</span>. Semua hak dilindungi.
          </p>
          <p className="footer-copy">Think tank independen untuk Indonesia yang lebih baik.</p>
        </div>
      </div>
    </footer>
  )
}
