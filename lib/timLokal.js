// ── PERUBAHAN DATA TIM (diatur di kode) ──
// Menimpa data anggota tim dari Sanity berdasarkan _id dokumennya.
// Foto disimpan di folder public/tim/.
// Hapus entri di sini kalau datanya sudah diperbarui langsung di Sanity Studio.
export const timLokal = {
  // Wakil Ketua Bidang Kerjasama & Internal: foto dipotong ulang agar wajah di tengah
  'f67ab9d2-0243-4731-82b9-2a1275de2fb6': {
    foto: '/tim/rabeka-putri.jpg',
  },
  // Wakil Ketua Bidang Riset & SDM: foto dipotong ulang agar kepala tidak terpotong
  '06d84bca-c1ab-44d9-9f4f-185f64a75f28': {
    foto: '/tim/muhammad-rani.jpg',
  },
  // Ketua Umum: foto dengan background putih
  '6292d3f2-97ec-42e5-9e44-aefce2d20db8': {
    foto: '/tim/hafidz-ridha.jpg',
  },
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
    _id: 'lokal-tim-sofiani-lathifah',
    nama: 'apt. Sofiani Lathifah, M.Farm.',
    peran: 'Dewan Pengawas',
    inisial: 'SL',
    foto: '/tim/sofiani-lathifah.jpg',
    profil:
      'apt. Sofiani Lathifah, M.Farm. adalah seorang tenaga kesehatan profesional dan akademisi di bidang farmasi yang berbasis di Palangka Raya, Kalimantan Tengah. Ia mendedikasikan keahliannya dalam pelayanan kefarmasian klinis serta pengembangan inovasi sosial.\n\n' +
      'Pendidikan\n' +
      '• Sarjana Farmasi (S1), Universitas Darussalam (UNIDA)\n' +
      '• Program Pendidikan Profesi Apoteker, Universitas Islam Indonesia (UII) Yogyakarta\n' +
      '• Magister Farmasi (S2), Universitas Ahmad Dahlan (UAD) Yogyakarta\n\n' +
      'Karier & Profesi\n' +
      '• Manager Riset dan Publikasi di Naturonal (Naturonal Creatama Indonesia).\n' +
      '• Pernah bekerja di Rumah Sakit Permata Hati.\n' +
      '• Peneliti dengan ketertarikan pada riset di bidang ilmu farmasi, sejalan dengan latar belakang pendidikan pascasarjananya.\n\n' +
      'Pengalaman Organisasi\n' +
      '• Anggota Pengurus Cabang Ikatan Apoteker Indonesia (PC IAI) Kota Palangka Raya.\n' +
      '• Dewan Pengawas Langkah Inovasi Indonesia (LII): berperan aktif memberikan pengawasan dan arahan strategis, serta memastikan tata kelola program berjalan sesuai visi organisasi dalam mendorong inovasi dan pemberdayaan masyarakat.',
    urutan: 0,
  },
  {
    _id: 'lokal-tim-duni',
    nama: 'Duni',
    peran: 'Kepala Bidang Pengembangan Sumber Daya Manusia',
    inisial: 'DU',
    foto: '/tim/duni.jpg',
    profil: null,
    urutan: 6,
  },
  {
    _id: 'lokal-tim-yuyun',
    nama: 'Yuyun Sanjaya',
    peran: 'Kepala Bidang Public Relations',
    inisial: 'YS',
    foto: '/tim/yuyun.jpg',
    profil: null,
    urutan: 7,
  },
  {
    _id: 'lokal-tim-vira',
    nama: 'Vira Riana',
    peran: 'Kepala Bidang Riset & Inovasi',
    inisial: 'VR',
    foto: '/tim/vira.jpg',
    profil: null,
    urutan: 8,
  },
]
