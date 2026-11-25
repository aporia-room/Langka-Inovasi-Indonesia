'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'

const EMAIL = 'langkahinovasiindonesia2030@gmail.com'

const KABUPATEN = [
  'Kota Palangka Raya',
  'Kabupaten Barito Selatan',
  'Kabupaten Barito Timur',
  'Kabupaten Barito Utara',
  'Kabupaten Gunung Mas',
  'Kabupaten Kapuas',
  'Kabupaten Katingan',
  'Kabupaten Kotawaringin Barat',
  'Kabupaten Kotawaringin Timur',
  'Kabupaten Lamandau',
  'Kabupaten Murung Raya',
  'Kabupaten Pulang Pisau',
  'Kabupaten Seruyan',
  'Kabupaten Sukamara',
  'Luar Kalimantan Tengah',
]

const BIDANG = [
  { id: 'Pengembangan Sumber Daya Manusia (PSDM)', label: 'PSDM', ket: 'Pengembangan Sumber Daya Manusia' },
  { id: 'Public Relations', label: 'PR', ket: 'Public Relations' },
  { id: 'Riset & Inovasi', label: 'R&I', ket: 'Riset & Inovasi' },
]

const KOSONG = { nama: '', kabupaten: '', wa: '', jurusan: '', kampus: '', bidang: '' }

export default function DaftarPage() {
  const [form, setForm] = useState(KOSONG)
  const [status, setStatus] = useState('idle')
  const [jebakan, setJebakan] = useState('')

  const ubah = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const kirim = async (e) => {
    e.preventDefault()
    if (jebakan) return
    if (!form.bidang) {
      setStatus('bidang')
      return
    }
    setStatus('mengirim')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nama: form.nama,
          'Asal Kabupaten/Kota': form.kabupaten,
          'No. WhatsApp': form.wa,
          'Jurusan Kuliah': form.jurusan,
          Kampus: form.kampus,
          'Bidang yang Dipilih': form.bidang,
          _subject: `Pendaftaran Open Recruitment LII – ${form.nama}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === false || data.success === 'false') throw new Error('Gagal')
      setStatus('terkirim')
      setForm(KOSONG)
    } catch (err) {
      setStatus('gagal')
    }
  }

  return (
    <div className="page">
      <section className="daftar-wrap">
        <div className="daftar-card">
          <div className="daftar-head">
            <span className="daftar-label">Open Recruitment 2026–2029</span>
            <h1 className="daftar-judul">Formulir Pendaftaran Pengurus</h1>
            <p className="daftar-sub">
              Langkah Inovasi Indonesia membuka kesempatan bagi pemuda Kalimantan Tengah untuk bergabung.
              Pendaftaran ditutup <b>30 November 2026</b>.
            </p>
          </div>

          {status === 'terkirim' ? (
            <div className="daftar-sukses">
              <h2>Pendaftaran terkirim!</h2>
              <p>
                Terima kasih telah mendaftar. Tim LII akan menghubungi kamu lewat WhatsApp untuk tahap
                wawancara pada 7–12 Desember 2026.
              </p>
              <button type="button" className="btn-primary" onClick={() => setStatus('idle')}>
                Isi formulir lagi
              </button>
            </div>
          ) : (
            <form className="daftar-form" onSubmit={kirim}>
              <input
                type="text"
                name="_honey"
                value={jebakan}
                onChange={(e) => setJebakan(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <label className="daftar-field">
                <span>Nama lengkap</span>
                <input required value={form.nama} onChange={ubah('nama')} placeholder="Nama sesuai KTP/KTM" />
              </label>

              <label className="daftar-field">
                <span>Asal kabupaten/kota</span>
                <select required value={form.kabupaten} onChange={ubah('kabupaten')}>
                  <option value="" disabled>Pilih kabupaten/kota</option>
                  {KABUPATEN.map((k) => (
                    <option key={k} value={k}>{k}</option>
                  ))}
                </select>
              </label>

              <label className="daftar-field">
                <span>Nomor WhatsApp</span>
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+ \-]{9,16}"
                  value={form.wa}
                  onChange={ubah('wa')}
                  placeholder="08xx-xxxx-xxxx"
                />
              </label>

              <div className="daftar-dua">
                <label className="daftar-field">
                  <span>Jurusan kuliah</span>
                  <input required value={form.jurusan} onChange={ubah('jurusan')} placeholder="Contoh: Ilmu Pemerintahan" />
                </label>
                <label className="daftar-field">
                  <span>Kampus</span>
                  <input required value={form.kampus} onChange={ubah('kampus')} placeholder="Contoh: Universitas Palangka Raya" />
                </label>
              </div>

              <fieldset className="daftar-field daftar-bidang">
                <span>Bidang yang dipilih</span>
                <div className="daftar-pilihan">
                  {BIDANG.map((b) => (
                    <label key={b.id} className={`daftar-opsi${form.bidang === b.id ? ' aktif' : ''}`}>
                      <input
                        type="radio"
                        name="bidang"
                        value={b.id}
                        checked={form.bidang === b.id}
                        onChange={ubah('bidang')}
                      />
                      <b>{b.label}</b>
                      <small>{b.ket}</small>
                    </label>
                  ))}
                </div>
              </fieldset>

              {status === 'bidang' && <p className="daftar-error">Pilih salah satu bidang terlebih dahulu.</p>}
              {status === 'gagal' && (
                <p className="daftar-error">
                  Maaf, pendaftaran belum terkirim. Coba lagi, atau hubungi WhatsApp LII di +62 857-5412-1425.
                </p>
              )}

              <button type="submit" className="btn-primary daftar-kirim" disabled={status === 'mengirim'}>
                {status === 'mengirim' ? 'Mengirim…' : 'Kirim Pendaftaran'}
              </button>
              <p className="daftar-catatan">Data kamu hanya digunakan untuk proses seleksi pengurus LII.</p>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
