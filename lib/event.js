import { getEventSanity } from './sanity'
import { formatTanggal } from './format'

// Tanggal hari ini di zona waktu WIB, format YYYY-MM-DD
export function hariIniWIB() {
  return new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 10)
}

export function statusEvent(e, hariIni = hariIniWIB()) {
  const selesai = e.selesai || e.mulai
  if (hariIni < e.mulai) return 'akan'
  if (hariIni > selesai) return 'selesai'
  return 'berlangsung'
}

export const labelStatus = {
  berlangsung: 'Berlangsung',
  akan: 'Akan Datang',
  selesai: 'Selesai',
}

export function rentangTanggal(e) {
  if (!e.selesai || e.selesai === e.mulai) return formatTanggal(e.mulai)
  const a = formatTanggal(e.mulai)
  const b = formatTanggal(e.selesai)
  const [da, ...ra] = a.split(' ')
  const [db, ...rb] = b.split(' ')
  return ra.join(' ') === rb.join(' ') ? `${da}–${db} ${rb.join(' ')}` : `${a} – ${b}`
}

// Semua event dengan status, diurutkan: berlangsung, akan datang, lalu selesai (terbaru dulu)
export async function daftarEvent() {
  const hariIni = hariIniWIB()
  const urutan = { berlangsung: 0, akan: 1, selesai: 2 }
  const semuaEvent = await getEventSanity()
  return semuaEvent
    .map((e) => ({ ...e, status: statusEvent(e, hariIni) }))
    .sort(
      (a, b) =>
        urutan[a.status] - urutan[b.status] ||
        (a.status === 'selesai' ? b.mulai.localeCompare(a.mulai) : a.mulai.localeCompare(b.mulai))
    )
}
