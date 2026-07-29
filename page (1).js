'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Program', href: '/program' },
  { label: 'Publikasi', href: '/blog' },
  { label: 'Kontak', href: '/kontak' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="navbar-logo">
          <span>LII</span> — Langkah Inovasi Indonesia
        </Link>

        <div className="navbar-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? 'active' : ''}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/kontak" className="navbar-cta">
            Hubungi Kami
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Buka menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
