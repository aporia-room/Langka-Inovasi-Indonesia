'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'

const EMAIL = 'langkahinovasiindonesia2045@gmail.com'
const IG = 'https://www.instagram.com/langkahinovasiindonesia/'

export default function Kontak() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    organisasi: '',
    topik: '',
    pesan: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Membuka aplikasi email pengunjung dengan pesan yang sudah terisi
  const handleSubmit = (e) => {
    e.preventDefault()
    const subjek = `[Website LII] ${form.topik} — ${form.nama}`
    const isi =
      `Nama: ${form.nama}\n` +
      `Email: ${form.email}\n` +
      (form.organisasi ? `Organisasi/Institusi: ${form.organisasi}\n` : '') +
      `Topik: ${form.topik}\n\n` +
      form.pesan
    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(isi)}`
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="kontak-hero">
        <div className="kontak-hero-inner">
          <div className="label" style={{ background: 'var(--hitam)', color: 'var(--kuning)' }}>
            Kontak
          </div>
          <h1 className="display">Mari Berkolaborasi</h1>
          <p className="lead">
            Kami terbuka untuk diskusi, kemitraan, undangan pembicara,
            dan kolaborasi program. Hubungi kami melalui formulir di bawah.
          </p>
        </div>
      </section>

      {/* ── KONTEN ── */}
      <section className="section">
        <div className="kontak-grid">

          {/* Info Kontak */}
          <div className="kontak-info">
            <h3>Informasi Kontak</h3>

            <div className="kontak-item">
              <div className="kontak-icon">📍</div>
              <div>
                <div className="kontak-item-label">Alamat</div>
                <a className="kontak-item-val" href="https://www.google.com/maps/search/?api=1&query=Jl.+Salampak+Umar+No.+7+Panarung+Pahandut+Palangka+Raya" target="_blank" rel="noopener noreferrer">
                  Jl. Salampak Umar No. 7, Kel. Panarung, Kec. Pahandut, Kota Palangka Raya, Kalimantan Tengah
                </a>
              </div>
            </div>

            <div className="kontak-item">
              <div className="kontak-icon">✉️</div>
              <div>
                <div className="kontak-item-label">Email</div>
                <a className="kontak-item-val" href={`mailto:${EMAIL}`} style={{ wordBreak: 'break-all' }}>
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="kontak-item">
              <div className="kontak-icon">📱</div>
              <div>
                <div className="kontak-item-label">Instagram</div>
                <a className="kontak-item-val" href={IG} target="_blank" rel="noopener noreferrer">
                  @langkahinovasiindonesia
                </a>
              </div>
            </div>

            <div style={{ marginTop: '8px' }}>
              <div className="kontak-item-label" style={{ marginBottom: '12px' }}>
                Ikuti Kami
              </div>
              <div className="sosmed-grid">
                <a className="sosmed-btn" href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram LII">
                  📷
                </a>
                <a className="sosmed-btn" href={`mailto:${EMAIL}`} aria-label="Email LII">
                  ✉️
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="kontak-form">
            <h3>Kirim Pesan</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input
                    type="text"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    placeholder="Nama kamu"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@kamu.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Organisasi / Institusi</label>
                <input
                  type="text"
                  name="organisasi"
                  value={form.organisasi}
                  onChange={handleChange}
                  placeholder="Opsional"
                />
              </div>

              <div className="form-group">
                <label>Topik</label>
                <select name="topik" value={form.topik} onChange={handleChange} required>
                  <option value="">Pilih topik...</option>
                  <option>Kemitraan</option>
                  <option>Kolaborasi Program</option>
                  <option>Undangan Pembicara</option>
                  <option>Pertanyaan Umum</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div className="form-group">
                <label>Pesan</label>
                <textarea
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  placeholder="Tulis pesanmu di sini..."
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Kirim Pesan →
              </button>
              <p className="body-text" style={{ fontSize: '13px', marginTop: '12px', color: 'var(--abu)' }}>
                Tombol ini membuka aplikasi email kamu dengan pesan yang sudah terisi. Tinggal tekan Kirim di sana.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Notifikasi */}
      {sent && (
        <div className="toast">
          Aplikasi email dibuka. Jangan lupa tekan Kirim di sana, ya.
        </div>
      )}

      <Footer />
    </div>
  )
}
