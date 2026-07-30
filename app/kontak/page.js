'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'

export default function Kontak() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    organisasi: '',
    topik: '',
    pesan: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // TODO: Ganti dengan Formspree ID kamu
    // Daftar di formspree.io, buat form baru, copy ID-nya
    // Contoh: const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', ...)

    // Simulasi kirim (sementara)
    await new Promise((r) => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
    setForm({ nama: '', email: '', organisasi: '', topik: '', pesan: '' })

    setTimeout(() => setSent(false), 4000)
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
            Kami terbuka untuk diskusi, kemitraan riset, undangan pembicara,
            dan kolaborasi akademik. Hubungi kami melalui formulir di bawah.
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
                <div className="kontak-item-val">Palangka Raya, Kalimantan Tengah, Indonesia</div>
              </div>
            </div>

            <div className="kontak-item">
              <div className="kontak-icon">✉️</div>
              <div>
                <div className="kontak-item-label">Email</div>
                <div className="kontak-item-val">info@lii-indonesia.org</div>
              </div>
            </div>

            <div className="kontak-item">
              <div className="kontak-icon">📱</div>
              <div>
                <div className="kontak-item-label">Media Sosial</div>
                <div className="kontak-item-val">@lii.indonesia</div>
              </div>
            </div>

            <div style={{ marginTop: '8px' }}>
              <div className="kontak-item-label" style={{ marginBottom: '12px' }}>
                Ikuti Kami
              </div>
              <div className="sosmed-grid">
                {['𝕏', 'in', '📷', '▶'].map((s) => (
                  <a key={s} className="sosmed-btn">
                    {s}
                  </a>
                ))}
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
                  <option>Kemitraan Riset</option>
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

              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? 'Mengirim...' : 'Kirim Pesan →'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Notifikasi */}
      {sent && (
        <div className="toast">
          ✓ Pesan terkirim! Kami akan segera menghubungi Anda.
        </div>
      )}

      <Footer />
    </div>
  )
}
