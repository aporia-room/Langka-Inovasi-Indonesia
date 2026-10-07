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
              Perkumpulan pemuda berbasis di Palangka Raya, Kalimantan Tengah,
              yang menghimpun dan memberdayakan pemuda Indonesia untuk berperan
              aktif dalam pembangunan.
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
            <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Salampak+Umar+Panarung+Pahandut+Palangka+Raya" target="_blank" rel="noopener noreferrer">
              Jl. Salampak Umar, Panarung, Pahandut, Palangka Raya
            </a>
            <a href="mailto:langkahinovasiindonesia2030@gmail.com" style={{ wordBreak: 'break-all' }}>langkahinovasiindonesia2030@gmail.com</a>
            <a href="https://www.instagram.com/langkahinovasiindonesia/" target="_blank" rel="noopener noreferrer">@langkahinovasiindonesia</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 <span className="footer-kuning">Langkah Inovasi Indonesia</span>. Semua hak dilindungi.
          </p>
          <p className="footer-copy">Wadah pemuda untuk Indonesia yang lebih maju.</p>
        </div>
      </div>
    </footer>
  )
}
