// ── BERITA LOKAL ──
// Artikel yang disimpan langsung di kode website (bukan di Sanity).
// Tampil bersama artikel Sanity di beranda, /blog, dan halaman detail.
// Foto disimpan di folder public/berita/.
//
// Cara menambah berita: salin satu objek di bawah, ubah isinya,
// dan pastikan `slug` unik (huruf kecil, pakai tanda hubung).

// Pembantu kecil untuk menyusun isi artikel (format Portable Text)
let k = 0
const key = () => `lokal${++k}`
const span = (text) => ({ _type: 'span', _key: key(), text, marks: [] })
const p = (text) => ({ _type: 'block', _key: key(), style: 'normal', markDefs: [], children: [span(text)] })
const h2 = (text) => ({ _type: 'block', _key: key(), style: 'h2', markDefs: [], children: [span(text)] })
const li = (text) => ({ _type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, markDefs: [], children: [span(text)] })

export const beritaLokal = [
  {
    _id: 'lokal-kamu-fest-5-0',
    slug: 'kamu-fest-5-0-menyiapkan-pemuda-kalteng-merebut-masa-depan',
    judul: 'KAMU FEST 5.0: Menyiapkan Pemuda Kalimantan Tengah Merebut Masa Depan',
    cat: 'Berita',
    penulis: 'Tim LII',
    tanggal: '2026-11-15',
    gambar: '/berita/kamu-fest-5-0.jpg',
    desc: 'Kalteng Maju Festival (KAMU FEST) 5.0 kembali digelar pada 2026 untuk 85 pemuda terpilih Kalimantan Tengah. Latar belakang kegiatan ini dirumuskan dalam TOR KAMU FEST 5.0: IPP yang masih rendah, pengangguran lulusan menengah, dan kesenjangan keterampilan.',
    body: [
      p('Kalteng Maju Festival (KAMU FEST) kembali hadir untuk kelima kalinya. Pelatihan Capacity Building KAMU FEST 5.0 Tingkat Provinsi Kalimantan Tengah Tahun 2026 dibuka pada Kamis malam, 25 Juni 2026, di Aula BPSDM Provinsi Kalimantan Tengah. Kegiatan yang diinisiasi Dinas Pemuda dan Olahraga (Dispora) Provinsi Kalimantan Tengah ini diikuti 85 pemuda-pemudi pilihan berusia 17 hingga 30 tahun, perwakilan dari 13 kabupaten dan 1 kota se-Kalimantan Tengah.'),
      p('Langkah Inovasi Indonesia (LII) kembali terlibat dalam rangkaian kegiatan ini, mulai dari pembukaan hingga penutupan, sebagai bagian dari komitmen LII untuk memberdayakan pemuda Kalimantan Tengah.'),

      h2('Latar Belakang Kegiatan'),
      p('Latar belakang KAMU FEST 5.0 dapat dibaca dari Term of Reference (TOR) Kalteng Maju Festival 2026 5.0 yang disusun panitia. TOR tersebut berangkat dari keyakinan bahwa peran generasi muda dalam pembangunan sangat penting: pemuda bukan hanya kelompok masyarakat terbesar, tetapi tanpa potensi dan kreativitas mereka, pembangunan bisa kehilangan arah.'),
      p('TOR mencatat bahwa Indeks Pembangunan Pemuda (IPP) Kalimantan Tengah masih berada di peringkat kedua terbawah di antara provinsi di Kalimantan, dengan nilai 71,63, dan di peringkat 21 dari 34 provinsi. KAMU FEST diharapkan dapat meningkatkan kualitas partisipasi dan kepemimpinan pemuda, sehingga membuka peluang masa depan yang lebih baik bagi mereka.'),
      p('Dari sisi ketenagakerjaan, TOR menyoroti Tingkat Pengangguran Terbuka (TPT) Kalimantan Tengah yang tercatat 4,01% pada Agustus 2024, sedikit turun dari 4,10% pada tahun sebelumnya. Di Kota Palangka Raya, angkanya justru lebih tinggi, yaitu 5,02% pada 2024. Secara nasional, pengangguran lulusan SMK (9,01%) dan SMA (7,05%) juga relatif tinggi dibandingkan lulusan SD dan SMP, yang menunjukkan masih adanya jarak antara pendidikan menengah dan kebutuhan pasar kerja.'),
      p('TOR juga menyebut rata-rata lama sekolah di Kalimantan Tengah yang baru setara kelas 2 SMP, rendahnya partisipasi di jenjang SMA dan perguruan tinggi, serta kesenjangan keterampilan (skills gap) antara lulusan dan kebutuhan industri. Ditambah terbatasnya akses ke peluang kerja dan minimnya jaringan profesional, kondisi ini membuat daya saing SDM Kalimantan Tengah masih dinilai rendah. Dari persoalan inilah KAMU FEST hadir sebagai wadah peningkatan kapasitas pemuda.'),

      h2('Tema dan Materi'),
      p('KAMU FEST 5.0 mengusung tema "Merebut Masa Depan Kalimantan Tengah: Membuka Jalan Menuju Tingkat Nasional". Kegiatan dikemas dalam format semi-conference dengan empat topik utama:'),
      li('Design Thinking: tahapan empathize, define, ideate, prototype, dan testing untuk memecahkan masalah secara kreatif.'),
      li('Leadership: kepemimpinan dalam tim dan organisasi, pengambilan keputusan, serta kepemimpinan transformatif yang sesuai kebutuhan zaman.'),
      li('Public Speaking: teori dan konsep dasar berbicara di depan umum, pengolahan suara dan penampilan, hingga penulisan naskah.'),
      li('Writing Skill: pentingnya kemampuan menulis, metode 5W+1H, dasar-dasar academic writing, dan penerapan analytical thinking dalam kepenulisan.'),

      h2('Tujuan'),
      p('Melalui materi-materi tersebut, KAMU FEST 5.0 bertujuan untuk:'),
      li('Meningkatkan kualitas sumber daya manusia Kalimantan Tengah menuju Indonesia Emas 2045.'),
      li('Membentuk karakter pemuda-pemudi Kalimantan Tengah yang aktif dan kritis.'),
      li('Membekali peserta dengan keterampilan dan pengetahuan baru untuk meningkatkan produktivitas.'),
      li('Melatih kemampuan beradaptasi terhadap perubahan, dari skala lokal hingga internasional.'),
      li('Melahirkan pemimpin muda yang mampu mengambil keputusan dengan cepat dan tepat.'),
      li('Menyiapkan peserta untuk bersaing di dunia industri dengan melihat kesesuaian antara kebutuhan industri dan kualitas diri.'),

      p('LII berharap para peserta KAMU FEST 5.0 dapat membawa bekal yang mereka dapatkan kembali ke daerah masing-masing, dan menjadi penggerak perubahan bagi Kalimantan Tengah.'),
    ],
  },
  {
    _id: 'lokal-sejarah-kalteng-maju-festival',
    slug: 'sejarah-terbentuknya-kalteng-maju-festival',
    judul: 'Sejarah Terbentuknya Kalteng Maju Festival',
    cat: 'Berita',
    penulis: 'Tim LII',
    tanggal: '2026-11-14',
    gambar: '/berita/kalteng-maju-festival.jpg',
    desc: 'Kalteng Maju Festival (KAMU FEST) hadir sejak 2023 sebagai wadah pelatihan kepemimpinan bagi pemuda Kalimantan Tengah. Dari tahun ke tahun, program ini terus melatih pemuda terpilih dari seluruh kabupaten/kota di Kalteng.',
    body: [
      p('Kalteng Maju Festival, atau KAMU FEST, adalah program pengembangan pemuda yang diinisiasi Dinas Pemuda dan Olahraga (Dispora) Provinsi Kalimantan Tengah. Sejak pertama digelar pada 2023, KAMU FEST menjadi wadah pelatihan kepemimpinan bagi anak muda Kalimantan Tengah, dengan materi penulisan, kepemimpinan, design thinking, dan public speaking. Langkah Inovasi Indonesia (LII) turut terlibat sebagai penyelenggara pelatihan kepemimpinan tersebut.'),
      p('Program ini lahir dari upaya Dispora Kalteng untuk meningkatkan Indeks Pembangunan Pemuda (IPP). Pemerintah provinsi menilai Kalimantan Tengah memiliki potensi besar, tetapi masih menghadapi tantangan seperti tingginya angka pengangguran, terbatasnya akses kerja bagi kelompok rentan, minimnya jaringan profesional, serta rendahnya kesadaran generasi muda untuk mengembangkan diri di era digital.'),
      h2('Perjalanan KAMU FEST'),
      p('KAMU FEST Vol. 2.0 digelar pada 11–14 Oktober 2023 dan diikuti mahasiswa dari berbagai kampus di Kalimantan Tengah. Pada 2025, rangkaian KAMU FEST 4.0 dijadwalkan pada akhir Mei hingga awal Juni, dan pelatihan capacity building-nya dibuka Kepala Dispora Kalteng Agus Siswadi di Hotel Aurila, Palangka Raya, pada 20 Juni 2025. Ketua Komisi II DPRD Kalteng Siti Nafsiah menilai proses seleksi peserta KAMU FEST tidak sembarangan. Pada kesempatan itu juga diserahkan buku antologi karya alumni KAMU FEST berjudul "Dari Kalimantan Tengah untuk Indonesia: Sebuah Upaya Menggatang Utus Itah".'),
      p('Program ini berlanjut ke edisi kelima. Pelatihan Capacity Building KAMU FEST 5.0 dibuka di Aula BPSDM Provinsi Kalimantan Tengah pada 25 Juni 2026, diikuti 85 pemuda-pemudi pilihan berusia 17–30 tahun dari 13 kabupaten dan 1 kota se-Kalimantan Tengah.'),
      p('Dari tahun ke tahun, KAMU FEST tumbuh menjadi salah satu wadah utama pembinaan pemimpin muda di Bumi Tambun Bungai. LII bangga menjadi bagian dari perjalanan ini.'),
    ],
  },
]

// Versi ringkas (tanpa isi) untuk daftar artikel
export const beritaLokalRingkas = beritaLokal.map(({ body, ...rest }) => ({
  ...rest,
  linkEksternal: rest.linkEksternal || null,
}))
