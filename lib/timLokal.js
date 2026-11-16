// ── CADANGAN DATA TIM ──
// Anggota tim sekarang diatur lewat Sanity Studio (menu Tim).
// Daftar di bawah hanya cadangan: dipakai kalau anggota dengan id yang sama belum ada di Sanity.
// Profil di sini juga dipakai kalau kolom Profil Singkat anggota tersebut di Sanity masih kosong.
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
    profil:
      'Duni adalah pemerhati isu kebudayaan dan kepemudaan dengan latar belakang pendidikan Sosiologi. Ketertarikannya pada dinamika sosial masyarakat, khususnya generasi muda dan kekayaan budaya Kalimantan Tengah, ia wujudkan melalui perannya sebagai Kepala Bidang Pengembangan Sumber Daya Manusia di Langkah Inovasi Indonesia, dengan fokus memperkuat kapasitas dan karakter pemuda sebagai penggerak pembangunan daerah.',
    urutan: 6,
  },
  {
    _id: 'lokal-tim-yuyun',
    nama: 'Yuyun Sanjaya',
    peran: 'Kepala Bidang Public Relations',
    inisial: 'YS',
    foto: '/tim/yuyun-sanjaya.jpg',
    profil:
      'Yuyun Sanjaya adalah pemerhati isu lingkungan dan hak asasi manusia (HAM) dengan latar belakang pendidikan Komunikasi Penyiaran Islam. Kepeduliannya terhadap kelestarian lingkungan dan keadilan sosial di Kalimantan Tengah ia salurkan melalui perannya sebagai Kepala Bidang Public Relations di Langkah Inovasi Indonesia, dengan menghadirkan komunikasi publik yang informatif, kritis, dan berpihak pada kepentingan masyarakat.',
    urutan: 7,
  },
  {
    _id: 'lokal-tim-vira',
    nama: 'Vira Riana',
    peran: 'Kepala Bidang Riset & Inovasi',
    inisial: 'VR',
    foto: '/tim/vira.jpg',
    profil:
      'Vira Riana adalah pemerhati isu ekonomi pembangunan dan alumni KAMU FEST 4.0. Sejak masa mahasiswa, ia aktif sebagai peneliti di bidang riset dan inovasi, dengan ketertarikan pada bagaimana pembangunan ekonomi dapat memberi manfaat nyata bagi masyarakat daerah. Pengalaman tersebut ia bawa dalam perannya sebagai Kepala Bidang Riset & Inovasi di Langkah Inovasi Indonesia, untuk mendorong lahirnya riset dan gagasan inovatif yang berpijak pada kebutuhan Kalimantan Tengah.',
    urutan: 8,
  },
]

// ── PEMBARUAN KECIL PROFIL DARI SANITY ──
// Mengganti potongan teks tertentu di Profil Singkat dari Sanity.
// Kalau teks aslinya sudah diubah lewat Studio (potongan tidak ditemukan), profil dari Studio tampil apa adanya.
export const sisipanProfil = {
  // Hafidz Ridha Try Sjahputra: dosen PGRI Kalimantan Tengah
  '6292d3f2-97ec-42e5-9e44-aefce2d20db8': [
    [
      'Sebagai akademisi, ia aktif melakukan riset',
      'Sebagai akademisi, ia saat ini mengabdi sebagai Dosen PGRI Kalimantan Tengah serta aktif melakukan riset',
    ],
  ],
}

// ── PROFIL CADANGAN UNTUK ANGGOTA YANG DATANYA ADA DI SANITY ──
// Dipakai hanya kalau kolom Profil Singkat anggota tersebut di Sanity masih kosong.
export const profilCadangan = {
  // Diah Khairun Nisa, Bendahara Umum
  '56aca158-d4cb-42da-ab5c-92eec67a12e1':
    'Diah Khairun Nisa adalah pemerhati isu ekonomi syariah yang aktif dalam isu-isu kebangsaan, kepemudaan, dan penelitian. Ketertarikannya pada pengelolaan keuangan yang amanah dan berkeadilan sejalan dengan perannya sebagai Bendahara Umum Langkah Inovasi Indonesia, di mana ia bertanggung jawab menjaga tata kelola keuangan organisasi secara transparan dan akuntabel.',
}
