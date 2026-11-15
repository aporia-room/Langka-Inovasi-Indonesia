'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import { IconPin, IconMail, IconInstagram, IconPhone } from '@/components/Icons'

const EMAIL = 'langkahinovasiindonesia2030@gmail.com'
const IG = 'https://www.instagram.com/langkahinovasiindonesia/'
const TELEPON = '+62 857-5412-1425'
const WA = 'https://wa.me/6285754121425'

export default function Kontak() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    organisasi: '',
    topik: '',
    pesan: '',
  })
  // status: idle | mengirim | terkirim | gagal
  const [status, setStatus] = useState('idle')
  const [jebakan, setJebakan] = useState('') // honeypot anti-spam (tidak terlihat)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const subjek = () => `[Website LII] ${form.topik} — ${form.nama}`

  // Cadangan: buka aplikasi email pengunjung dengan pesan yang sudah terisi
  const bukaEmail = () => {
    const isi =
      `Nama: ${form.nama}\n` +
      `Email: ${form.email}\n` +
      (form.organisasi ? `Organisasi/Institusi: ${form.organisasi}\n` : '') +
      `Topik: ${form.topik}\n\n` +
      form.pesan
    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subjek())}&body=${encodeURIComponent(isi)}`
  }

  // Kirim langsung ke email LII lewat FormSubmit (https://formsubmit.co)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (jebakan) return // diisi bot, abaikan
    setStatus('mengirim')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nama: form.nama,
          Email: form.email,
          'Organisasi / Institusi': form.organisasi || '-',
          Topik: form.topik,
          Pesan: form.pesan,
          _replyto: form.email,
          _subject: subjek(),
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === false || data.success === 'false') throw new Error(data.message || 'Gagal')
      setStatus('terkirim')
      setForm({ nama: '', email: '', organisasi: '', topik: '', pesan: '' })
      setTimeout(() => setStatus('idle'), 8000)
    } catch (err) {
      setStatus('gagal')
    }
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
              <div className="kontak-icon"><IconPin /></div>
              <div>
                <div className="kontak-item-label">Alamat</div>
                <a className="kontak-item-val" href="https://www.google.com/maps/search/?api=1&query=Jl.+Salampak+Umar+Panarung+Pahandut+Palangka+Raya" target="_blank" rel="noopener noreferrer">
                  Jl. Salampak Umar, Kel. Panarung, Kec. Pahandut, Kota Palangka Raya, Kalimantan Tengah
                </a>
              </div>
            </div>

            <div className="kontak-item">
              <div className="kontak-icon"><IconMail /></div>
              <div>
                <div className="kontak-item-label">Email</div>
                <a className="kontak-item-val" href={`mailto:${EMAIL}`} style={{ wordBreak: 'break-all' }}>
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="kontak-item">
              <div className="kontak-icon"><IconPhone /></div>
              <div>
                <div className="kontak-item-label">Telepon / WhatsApp</div>
                <a className="kontak-item-val" href={WA} target="_blank" rel="noopener noreferrer">
                  {TELEPON}
                </a>
              </div>
            </div>

            <div className="kontak-item">
              <div className="kontak-icon"><IconInstagram /></div>
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
                  <IconInstagram />
                </a>
                <a className="sosmed-btn" href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp LII">
                  <IconPhone />
                </a>
                <a className="sosmed-btn" href={`mailto:${EMAIL}`} aria-label="Email LII">
                  <IconMail />
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

              {/* Honeypot: dibiarkan kosong oleh manusia */}
              <input
                type="text"
                name="_honey"
                value={jebakan}
                onChange={(e) => setJebakan(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              />

              <button type="submit" className="form-submit" disabled={status === 'mengirim'}>
                {status === 'mengirim' ? 'Mengirim…' : 'Kirim Pesan →'}
              </button>

              {status === 'gagal' && (
                <p className="body-text" style={{ fontSize: '13px', marginTop: '12px', color: '#B3261E' }}>
                  Pesan belum berhasil terkirim. Coba lagi, atau{' '}
                  <button type="button" onClick={bukaEmail} className="kontak-link-btn">
                    kirim lewat aplikasi email
                  </button>
                  .
                </p>
              )}
              <p className="body-text" style={{ fontSize: '13px', marginTop: '12px', color: 'var(--abu)' }}>
                Pesanmu akan langsung terkirim ke email Langkah Inovasi Indonesia ({EMAIL}), dan kami akan membalas ke alamat email yang kamu isi.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Notifikasi */}
      {status === 'terkirim' && (
        <div className="toast">
          Terima kasih! Pesanmu sudah terkirim. Kami akan segera membalas lewat email.
        </div>
      )}

      <Footer />
    </div>
  )
}
