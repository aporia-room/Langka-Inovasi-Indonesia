// ── PERUBAHAN DATA TIM (diatur di kode) ──
// Menimpa data anggota tim dari Sanity berdasarkan _id dokumennya.
// Foto disimpan di folder public/tim/.
// Hapus entri di sini kalau datanya sudah diperbarui langsung di Sanity Studio.
export const timLokal = {
  // Bendahara Umum (sebelumnya: Noorhana Sesar Sari, S.Akun)
  '56aca158-d4cb-42da-ab5c-92eec67a12e1': {
    nama: 'Diah Khairun Nisa',
    peran: 'Bendahara Umum',
    inisial: 'DK',
    foto: '/tim/diah-khairun-nisa.jpg',
    profil: null,
  },
}

// Anggota tim tambahan (tidak ada di Sanity).
// `urutan` menentukan posisi tampil: angka kecil tampil lebih dulu.
export const timTambahan = [
  {
    _id: 'lokal-tim-duni',
    nama: 'Duni',
    peran: 'Kepala Bidang PSDM',
    inisial: 'DU',
    foto: '/tim/duni.jpg',
    profil: null,
    urutan: 6,
  },
  {
    _id: 'lokal-tim-yuyun',
    nama: 'Yuyun',
    peran: 'Kepala Bidang Public Relations',
    inisial: 'YU',
    foto: '/tim/yuyun.jpg',
    profil: null,
    urutan: 7,
  },
  {
    _id: 'lokal-tim-vira',
    nama: 'Vira',
    peran: 'Head of Riset & Inovasi',
    inisial: 'VI',
    foto: '/tim/vira.jpg',
    profil: null,
    urutan: 8,
  },
]
