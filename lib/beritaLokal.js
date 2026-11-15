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
const img = (url, caption) => ({ _type: 'image', _key: key(), url, caption })
const li = (text) => ({ _type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, markDefs: [], children: [span(text)] })
// Paragraf dengan tautan: plink('Teks sebelum ', 'teks tautan', 'https://...', ' teks sesudah.')
const plink = (sebelum, teksLink, href, sesudah = '') => {
  const m = key()
  return {
    _type: 'block', _key: key(), style: 'normal',
    markDefs: [{ _type: 'link', _key: m, href }],
    children: [span(sebelum), { _type: 'span', _key: key(), text: teksLink, marks: [m] }, span(sesudah)],
  }
}

export const beritaLokal = [
  {
    _id: 'lokal-fasilitasi-pemajuan-kebudayaan-2026',
    slug: 'founder-lii-terima-fasilitasi-pemajuan-kebudayaan-2026',
    judul: 'Founder LII Terpilih sebagai Penerima Fasilitasi Pemajuan Kebudayaan 2026',
    cat: 'Berita',
    penulis: 'Tim LII',
    tanggal: '2026-10-21',
    gambar: '/berita/fasilitasi-pemajuan-kebudayaan/slide-01.jpg',
    desc: 'Hafidz Ridha Try Sjahputra, Founder Langkah Inovasi Indonesia, terpilih sebagai penerima Fasilitasi Pemajuan Kebudayaan kategori Perseorangan untuk penelitian strategi edukasi budaya tentang makna filosofis Upacara Tiwah.',
    body: [
      p('Keluarga besar Langkah Inovasi Indonesia (LII) mengucapkan selamat dan sukses kepada Hafidz Ridha Try Sjahputra, S.IP., M.InternatRel., CLMA, CSDGs., Founder Langkah Inovasi Indonesia, atas terpilihnya sebagai penerima Fasilitasi Pemajuan Kebudayaan kategori Perseorangan dari Balai Pelestarian Kebudayaan Kalimantan Tengah dan Balai Pelestarian Kebudayaan Kalimantan Selatan.'),

      h2('Kegiatan yang Didukung'),
      li('Judul kegiatan: "Penelitian Strategi Edukasi Budaya: Mewariskan Makna Filosofis Upacara Tiwah kepada Generasi"'),
      li('Kategori: Perseorangan'),
      li('Lokasi: Kota Palangka Raya'),
      p('Tiwah adalah upacara adat Dayak yang sarat makna filosofis. Melalui penelitian ini, makna-makna tersebut akan dikaji dan dirumuskan menjadi strategi edukasi agar dapat diwariskan kepada generasi muda.'),

      h2('Langkah Bermakna untuk Budaya Dayak'),
      p('Pencapaian ini menjadi langkah bermakna dalam upaya menjaga warisan budaya Dayak, mewariskan nilai-nilai luhur kepada generasi muda, serta mendorong lahirnya inovasi dalam pelestarian dan pemajuan kebudayaan daerah.'),
      p('Semoga fasilitasi ini dapat berjalan dengan baik, memberikan manfaat nyata bagi masyarakat, dan menjadi inspirasi bagi generasi muda untuk terus mengenal, mencintai, serta melestarikan kebudayaan lokal. Terus berkarya, berinovasi, dan membawa dampak positif bagi Kalimantan Tengah dan Indonesia. Salam Inovasi!'),

      h2('Pengumuman Resmi'),
      p('Penetapan penerima ini diumumkan melalui akun Instagram resmi Balai Pelestarian Kebudayaan Kalimantan Tengah (@bp.kebudayaan_kalteng) dan Balai Pelestarian Kebudayaan Kalimantan Selatan (@bp.kebudayaan_kalsel).'),
      img('/berita/fasilitasi-pemajuan-kebudayaan/slide-02.jpg', 'Daftar penerima Fasilitasi Pemajuan Kebudayaan kategori Perseorangan, Balai Pelestarian Kebudayaan Kalimantan Tengah.'),
      plink('Lihat juga ', 'unggahan Langkah Inovasi Indonesia di Instagram', 'https://www.instagram.com/p/DewsTPGEquF/', '.'),
    ],
  },
  {
    _id: 'lokal-pb-hutan-hilang-bencana-datang',
    slug: 'hutan-hilang-bencana-datang',
    judul: 'Hutan Hilang, Bencana Datang: Deforestasi, Karhutla, dan Banjir di Kalimantan Tengah',
    cat: 'Policy Brief',
    penulis: 'Tim LII',
    tanggal: '2026-11-02',
    gambar: '/berita/hutan-hilang-bencana-datang/slide-01.jpg',
    desc: 'Sepanjang 2025, Kalimantan Tengah kehilangan 56.900 hektare hutan, terluas di Indonesia. Kajian ini membahas bagaimana deforestasi memicu karhutla dan banjir, siapa yang menanggung dampaknya, dan apa yang harus dilakukan.',
    body: [
      p('Petak Danum itah sedang tidak baik-baik saja. Sepanjang 2025, Kalimantan Tengah kehilangan 56.900 hektare hutan, terluas di Indonesia. Rata-rata sekitar 156 hektare hutan hilang setiap hari. Kajian ini membahas bagaimana deforestasi di Kalteng memicu kebakaran hutan dan lahan (karhutla) serta banjir, dan apa yang harus dilakukan.'),

      h2('Seberapa Parah? Kalteng Nomor Satu dalam Kehilangan Hutan'),
      p('Kehilangan hutan di Kalteng melonjak dari 33.389 hektare pada 2024 menjadi 56.900 hektare pada 2025, naik sekitar 70% hanya dalam setahun.'),
      li('Lebih dari 60% wilayah Kalteng sudah dibebani izin perkebunan, tambang, dan kehutanan.'),
      li('Kalteng memiliki 2,16 juta hektare kebun sawit (2024), terluas kedua di Indonesia.'),

      h2('Mengenal Gambut: Spons Raksasa Kalteng'),
      p('Gambut adalah tanah dari sisa tumbuhan yang membusuk perlahan selama ribuan tahun. Selama basah, gambut bekerja untuk kita: menyerap air saat hujan dan melepasnya perlahan, sulit terbakar, dan mengunci karbon di dalam tanah. Namun ketika airnya dibuang lewat kanal, gambut berubah menjadi bahan bakar: api menjalar di bawah permukaan, terbakar berminggu-minggu, dan melepas asap tebal serta karbon ke udara.'),
      li('28.889 hektare gambut ikut terdeforestasi di Indonesia pada 2025.'),
      li('Lebih dari 770 ribu hektare lahan Kalteng dibidik untuk padi dan singkong, banyak yang tumpang tindih dengan gambut rusak.'),

      h2('Satu Sebab, Dua Bencana'),
      p('Rantainya sederhana. Hutan dan gambut dibuka untuk sawit, hutan tanaman industri, tambang, dan proyek pangan. Gambut lalu dikeringkan: kanal membuang air gambut, dan tanpa tutupan hutan, air hujan tak lagi tertahan. Akibatnya, saat kemarau gambut kering mudah terbakar dan menghasilkan asap tebal; saat hujan air langsung mengalir ke sungai yang cepat meluap ke permukiman. WALHI mengaitkan banjir dan karhutla berulang dengan rusaknya gambut.'),

      h2('Dampaknya Nyata: Bencananya Sudah di Depan Pintu'),
      li('Karhutla 2026: 15.976 hektare lahan terbakar di Kalteng pada Januari–14 September, dan 153.916 titik panas terdeteksi dalam satu bulan (Agustus).'),
      li('Banjir: 221 kejadian banjir di Kalteng sepanjang 2021–2025; sekitar 25.000 warga terdampak banjir September 2021 di 11 kabupaten/kota.'),

      h2('Yang Menanggung Akhirnya Warga'),
      p('Kebakaran besar 2026 menjadi pengingat seberapa mahal harganya:'),
      li('Indeks Standar Pencemar Udara (ISPU) Palangka Raya mencapai 1.199 pada 30 September 2026. Di atas 300 sudah tergolong berbahaya.'),
      li('Tercatat 2.285 kejadian karhutla di Kalteng hingga 31 Agustus 2026, hingga gubernur menetapkan status tanggap darurat.'),
      li('Di satu puskesmas di Palangka Raya, tercatat 257 kasus ISPA hanya dalam 1–18 Agustus 2026, naik dari 192 kasus sepanjang Juli.'),
      p('Karena udara berbahaya, siswa PAUD, SD, dan SMP di Palangka Raya kembali belajar jarak jauh pada 14–16 September 2026. Anak-anak, lansia, dan pekerja lapangan paling dulu menghirup asapnya.'),

      h2('Sawit Meluas, Siapa yang Untung?'),
      p('Ekspansi sawit mengubah hutan menjadi kebun satu jenis. Monokultur menghapus habitat satwa seperti orangutan dan memutus koridor hutan. Kebun di gambut membutuhkan air yang dibuang lewat kanal, sementara pupuk dan pestisida terbawa ke sungai.'),
      li('108 perusahaan sawit di Kalteng dilaporkan masuk kawasan hutan.'),
      li('37.910 hektare hutan hilang di dalam konsesi sawit di seluruh Indonesia pada 2025.'),
      li('Hak warga atas kebun plasma: 59 dari 185 perusahaan sawit di Kalteng belum membangun kebun plasma sama sekali, dan 85 lainnya membangun plasma di bawah batas minimum 20%.'),

      h2('Ketika Lahan Berubah Jadi Sengketa'),
      p('Tercatat 401 konflik sosial di Kalteng sepanjang 2004–2025 yang hingga kini belum terselesaikan. Beberapa di antaranya:'),
      li('Bangkal, Seruyan (Oktober 2023): warga menuntut kebun plasma dan lahan di luar HGU perusahaan sawit. Bentrokan berujung satu warga tewas tertembak dan 11 warga ditangkap. Gubernur kemudian meminta izin HGU perusahaan yang tak menyediakan plasma 20% tidak diperpanjang.'),
      li('Laman Kinipan, Lamandau (2020): hutan adat yang dijaga turun-temurun dibuka untuk kebun sawit. Perlawanan warga adat justru berujung jerat hukum.'),
      li('Sekitar tambang (2025): sengketa lahan dan ganti rugi yang tidak sepadan menjadi keluhan warga paling sering, menurut temuan Komisi XII DPR.'),
      p('Secara nasional, konflik agraria 2025 mencakup 914,5 ribu hektare di 428 desa, dan perkebunan menjadi sektor dengan konflik terbanyak pada 2024.'),

      h2('Batu Bara: dari Tambang sampai Cerobong PLTU'),
      li('41.162 hektare hutan dibuka untuk tambang: deforestasi 2025 di dalam konsesi tambang di seluruh Indonesia.'),
      li('Sungai tercemar dan mendangkal: Komisi XII DPR menemukan pencemaran dan pendangkalan sungai di sekitar tambang Kalteng, sehingga jalur transportasi air warga terganggu.'),
      li('Lubang bekas tambang tak direklamasi menampung air asam tambang yang merusak tanah dan air di sekitarnya.'),
      li('Emisi PLTU batu bara memperburuk kualitas udara Kalimantan saat musim kebakaran.'),
      p('Izin tambang memang sudah dipangkas: dari 618 izin pada 2016 menjadi 226 izin setelah penataan 2020. Sekitar 70% pasokan batu bara nasional berasal dari Kalimantan, dan pada 2026 Satgas PKH mengambil alih 1.699 hektare bukaan tambang tanpa dasar hukum di Murung Raya. Namun lubang dan sungai belum pulih.'),
      p('Analisis kami: aturannya ada, yaitu UU 3/2020 tentang Minerba yang mewajibkan reklamasi dan pascatambang serta UU 32/2009 yang mewajibkan AMDAL. Masalahnya, pengawasannya lemah: izin kini di tangan pusat, ruang pengawasan daerah menyempit, dan tambang tanpa izin sah bisa beroperasi bertahun-tahun. Yang perlu dilakukan: buka data jaminan reklamasi per perusahaan, larang tambang di hulu DAS dan gambut, dan percepat transisi dari PLTU.'),

      h2('Sunset Industry: Sampai Kapan Kalteng Bisa Bersandar pada Batu Bara?'),
      p('Cadangan batu bara terverifikasi Kalteng sekitar 928 juta ton, dengan sumber daya total sekitar 3,7 miliar ton. Sektor tambang tumbuh 8,64%, tercepat di ekonomi Kalteng (Januari–September 2024). Namun pasarnya menyusut: di G20 (November 2024) Presiden menyebut PLTU bisa dipensiunkan dalam 15 tahun, sekitar 2040, menuju target net zero 2050. Sinyal pemerintah masih campur: Hashim Djojohadikusumo kemudian membantah PLTU akan disuntik mati pada 2040. Permintaan batu bara dunia juga diproyeksikan turun.'),
      p('Kesimpulan kajian: yang lebih dulu habis kemungkinan bukan batu baranya, tetapi pembelinya. Jika target pensiun PLTU berjalan, Kalteng hanya punya sekitar 15 tahun untuk menyiapkan ekonomi pengganti: hasil hutan bukan kayu, perikanan, ekowisata, dan energi terbarukan. (Perkiraan kasar, bukan proyeksi resmi.)'),

      h2('Sunrise Industry: Ekonomi yang Tumbuh Saat Hutan Tetap Berdiri'),
      li('Karbon hutan dan gambut: proyek Katingan Mentaya melindungi sekitar 157.875 hektare gambut dan menghasilkan hingga sekitar 7,5 juta kredit karbon per tahun. Pada Juli 2026, proyek ini menjadi satu dari empat proyek pertama yang disetujui masuk Sistem Registri Unit Karbon (SRUK).'),
      li('Ekowisata: Taman Nasional Tanjung Puting dan Sebangau dengan orangutan, susur sungai, dan wisata gambut.'),
      li('Hasil hutan: rotan Katingan, madu kelulut, dan jelutung diolah menjadi produk bernilai tambah.'),
      li('Energi bersih: tenaga surya untuk desa dan transportasi sungai, seperti kapal surya di Kahayan.'),
      p('Syaratnya: hak masyarakat adat dan desa harus dijamin, dan proyek karbon wajib transparan. Kalau tidak, manfaat sunrise industry bisa kembali dinikmati segelintir pihak, sama seperti batu bara.'),

      h2('Apa yang Sudah Dilakukan Pemerintah?'),
      p('Pemerintah pusat:'),
      li('Menghentikan izin baru di hutan primer dan gambut (Inpres 5/2019, berlaku permanen).'),
      li('Restorasi gambut lewat Badan Restorasi Gambut dan Mangrove (Perpres 120/2020).'),
      li('Penertiban sawit di kawasan hutan oleh Satgas PKH (Perpres 5/2025), sekitar 4,09 juta hektare secara nasional.'),
      li('Presiden memimpin rapat di posko karhutla Palangka Raya pada 22 Agustus 2026.'),
      p('Pemerintah Provinsi Kalimantan Tengah:'),
      li('Satgas Karhutla sekitar 10.700 personel dari BPBD, TNI, Polri, Manggala Agni, dan Masyarakat Peduli Api.'),
      li('Siaga darurat di 13 kabupaten/kota, dengan laporan harian 14 kabupaten/kota dihimpun di Pusdalops.'),
      li('Status tanggap darurat 31 Agustus–29 September 2026 lewat Keputusan Gubernur.'),
      li('Pemadaman dari udara dan darat dengan helikopter water bombing, ekskavator, dan mobil pemadam.'),
      p('Catatan kritis: upaya masih berat di pemadaman. Sekitar 58% deforestasi 2025 terjadi secara legal di area berizin atau proyek pemerintah, dan lebih dari 770 ribu hektare di Kalteng disiapkan untuk proyek pangan, banyak di antaranya di gambut.'),

      h2('Rekomendasi: Selesaikan dari Hulu, Bukan Cuma Padamkan Api'),
      li('Audit dan cabut izin bermasalah: izin yang merusak hutan alam dan gambut dievaluasi secara terbuka, dan hasil audit dibuka ke publik.'),
      li('Pulihkan gambut: sekat kanal, jaga muka air tetap tinggi, dan tanami kembali dengan jenis asli.'),
      li('Tegakkan tanggung jawab mutlak: perusahaan wajib menanggung kebakaran di lahannya (strict liability, UU 32/2009).'),
      li('Akui dan lindungi wilayah adat: libatkan masyarakat adat Dayak sebagai penjaga hutan dan sahkan RUU Masyarakat Adat.'),
      li('Tata ulang ruang: revisi RTRW Kalteng, kaji ulang proyek pangan di gambut, dan wajibkan reklamasi lubang tambang.'),
      p('Rekomendasi ini disarikan dari tuntutan WALHI Region Kalimantan (2026) dan kerangka hukum lingkungan hidup.'),

      h2('Anak Muda Tidak Harus Menunggu'),
      li('Pantau: cek titik panas di SiPongi (sistem pemantauan karhutla milik Kementerian Kehutanan) dan sebarkan informasi yang benar, bukan hoaks.'),
      li('Laporkan: pembakaran lahan ke BPBD, Manggala Agni, atau Masyarakat Peduli Api terdekat.'),
      li('Kawal: ikut konsultasi publik AMDAL dan RTRW; mahasiswa hukum bisa mengkaji jalur uji materiil.'),
      li('Pilih: produk sawit bersertifikat berkelanjutan, dan hemat listrik di rumah.'),
      li('Suarakan: bawa data ini ke diskusi kampus, komunitas, dan media sosial. Isu hutan Kalteng butuh lebih banyak orang yang paham.'),

      h2('Penutup'),
      p('Hutan Kalteng bukan sekadar pohon. Ia menahan air saat hujan, menjaga gambut tetap basah saat kemarau, dan menjadi ruang hidup masyarakat adat. Kehilangannya kita bayar dengan asap dan banjir. Leluhur kita mewariskan falsafah Huma Betang dan Belom Bahadat: hidup bersama dan menghormati alam yang memberi kita kehidupan. Menjaga hutan berarti menjaga warisan itu. Isen Mulang!'),

      h2('Sumber Data'),
      p('Auriga Nusantara, status deforestasi Indonesia 2025 (Mar 2026); BPS, Statistik Indonesia; WALHI Region Kalimantan, siaran pers (Jun 2026); BNPB via Katadata (Sep 2026); Setneg (Agt 2026); Keputusan Gubernur Kalteng 100.3.3.1/230/2026; Komisi XII DPR via Listrik Indonesia (Nov 2025); CNN Indonesia (Okt 2020); Kementerian ESDM (Apr 2026); TuK Indonesia & PSA IPB (Nov 2025); KPA (2026); Katadata (Jul 2026); Inpres 5/2019; Perpres 120/2020; Perpres 5/2025.'),

      h2('Slide Kajian Lengkap'),
      plink('Kajian ini pertama kali dipublikasikan di ', 'Instagram Langkah Inovasi Indonesia', 'https://www.instagram.com/p/DfPNXQcElRW/', ' pada 2 November 2026. Berikut slide lengkapnya:'),
      img('/berita/hutan-hilang-bencana-datang/slide-01.jpg', 'Slide 1 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-02.jpg', 'Slide 2 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-03.jpg', 'Slide 3 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-04.jpg', 'Slide 4 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-05.jpg', 'Slide 5 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-06.jpg', 'Slide 6 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-07.jpg', 'Slide 7 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-08.jpg', 'Slide 8 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-09.jpg', 'Slide 9 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-10.jpg', 'Slide 10 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-11.jpg', 'Slide 11 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-12.jpg', 'Slide 12 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-13.jpg', 'Slide 13 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-14.jpg', 'Slide 14 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-15.jpg', 'Slide 15 dari 16'),
      img('/berita/hutan-hilang-bencana-datang/slide-16.jpg', 'Slide 16 dari 16'),
    ],
  },
  {
    _id: 'lokal-open-recruitment-2026',
    slug: 'lii-buka-open-recruitment-pengurus-2026',
    judul: 'LII Buka Open Recruitment Pengurus Baru Tahun 2026',
    cat: 'Berita',
    penulis: 'Tim LII',
    tanggal: '2026-11-15',
    gambar: '/berita/open-recruitment-2026.jpg',
    desc: 'Langkah Inovasi Indonesia membuka open recruitment pengurus baru periode 2026–2029 bagi pemuda-pemudi terbaik Kalimantan Tengah. Daftar melalui q.me-qr.com/zjg0mt9c, pendaftaran berkas dibuka 2–30 November 2026.',
    body: [
      p('Langkah Inovasi Indonesia (LII) membuka open recruitment pengurus baru untuk periode 2026–2029. Kesempatan ini terbuka bagi pemuda-pemudi terbaik Kalimantan Tengah yang ingin ambil peran, bukan hanya menjadi penonton, dalam gerakan pemuda untuk Kalteng Maju.'),
      p('Mengusung semangat "Berkarya dan Berdampak untuk Kalimantan Tengah", LII mengajak anak muda untuk tumbuh, berkontribusi, dan menjadi bagian dari tim yang menjalankan program riset, edukasi, dan pemberdayaan pemuda di Kalimantan Tengah.'),

      h2('Kenapa Harus Bergabung?'),
      li('Kolaborasi solid bersama pemuda-pemudi dari berbagai latar belakang.'),
      li('Pengembangan potensi diri, kepemimpinan, dan jejaring.'),
      li('Kesempatan mewujudkan ide menjadi program nyata.'),
      li('Raih pengalaman berorganisasi dan berdampak bagi daerah.'),

      h2('Bidang yang Dibuka'),
      li('PSDM (Pengembangan Sumber Daya Manusia)'),
      li('Public Relations (PR)'),
      li('Riset dan Inovasi'),

      h2('Kualifikasi'),
      li('Berusia 19–27 tahun.'),
      li('Berdomisili di Provinsi Kalimantan Tengah (diutamakan Kota Palangka Raya).'),
      li('Mahasiswa/i aktif minimal semester 3, atau pemuda/i umum yang peduli terhadap pengembangan pemuda, riset, dan inovasi.'),
      li('Memiliki semangat belajar, kreativitas, inisiatif, dan mampu bekerja sama dalam tim.'),
      li('Bertanggung jawab, komunikatif, dan memiliki komitmen berorganisasi.'),
      li('Bersedia aktif dalam kegiatan dan program Langkah Inovasi Indonesia (LII).'),
      li('Memiliki kemauan untuk terus belajar, berkembang, dan meningkatkan kapasitas diri.'),
      li('Siap berkomitmen selama satu periode kepengurusan (Desember 2026 – November 2029).'),

      h2('Benefit'),
      li('Sertifikat resmi.'),
      li('Mentoring bersama profesional.'),
      li('Memperluas relasi dan networking.'),
      li('Kesempatan berkolaborasi dan terlibat dalam berbagai program inovatif.'),
      li('Ruang untuk belajar, berkarya, dan menciptakan dampak nyata.'),

      h2('Alur Pendaftaran dan Seleksi'),
      li('Pendaftaran berkas: 2–30 November 2026'),
      li('Seleksi berkas: 1–4 Desember 2026'),
      li('Pengumuman lolos seleksi berkas: 5 Desember 2026'),
      li('Wawancara calon pengurus: 7–12 Desember 2026'),
      li('Rapat penentuan pengurus baru: 14–16 Desember 2026'),
      li('Pengumuman akhir pengurus terpilih: 17 Desember 2026'),
      li('Orientasi pengurus baru: 19–20 Desember 2026'),
      li('Mulai masa kepengurusan baru: 22 Desember 2026'),

      h2('Cara Mendaftar'),
      plink('Pendaftaran dapat dilakukan melalui tautan resmi Open Recruitment LII berikut: ', 'q.me-qr.com/zjg0mt9c', 'https://q.me-qr.com/zjg0mt9c', '. Buka tautan tersebut, lalu ikuti petunjuk dan lengkapi berkas pendaftaran sebelum 30 November 2026.'),
      img('/berita/open-recruitment-2026-kualifikasi.jpg', 'Scan QR Code pada poster atau buka q.me-qr.com/zjg0mt9c untuk mendaftar.'),
      p('Untuk pertanyaan seputar pendaftaran, hubungi narahubung Kak Gretha di 0895-6159-16589.'),
      plink('Lihat juga ', 'pengumuman resmi di Instagram LII', 'https://www.instagram.com/p/DfpiDoDkjg4/', ', dan ikuti @kamufest.kalteng untuk kabar kegiatan kepemudaan lainnya.'),
      p('Jangan sampai ketinggalan! Ini saatnya kamu tumbuh, berkontribusi, dan menjadi bagian dari gerakan pemuda untuk Kalimantan Tengah. #BersamaKitaBerdampak'),
    ],
  },
  {
    _id: 'lokal-kamu-fest-5-0',
    slug: 'kamu-fest-5-0-menyiapkan-pemuda-kalteng-merebut-masa-depan',
    judul: 'KAMU FEST 5.0: Menyiapkan Pemuda Kalimantan Tengah Merebut Masa Depan',
    cat: 'Berita',
    penulis: 'Tim LII',
    tanggal: '2026-11-15',
    gambar: '/berita/kamu-fest-5-0.jpg',
    desc: 'Pelatihan Capacity Building KAMU FEST 5.0 dibuka 25 Juni 2026 di Aula BPSDM Kalteng, diikuti 85 pemuda dari 13 kabupaten dan 1 kota. Latar belakangnya dirumuskan dalam TOR KAMU FEST 5.0: IPP yang masih rendah, pengangguran, dan kesenjangan keterampilan.',
    body: [
      p('Kalteng Maju Festival (KAMU FEST) kembali hadir untuk kelima kalinya. Pelatihan Capacity Building KAMU FEST 5.0 Tingkat Provinsi Kalimantan Tengah Tahun 2026 dibuka pada Kamis malam, 25 Juni 2026, di Aula BPSDM Provinsi Kalimantan Tengah, Palangka Raya. Kegiatan ini diinisiasi oleh Dinas Pemuda dan Olahraga (Dispora) Provinsi Kalimantan Tengah.'),
      p('Pelatihan ini diikuti 85 pemuda-pemudi pilihan berusia 17 hingga 30 tahun, perwakilan dari 13 kabupaten dan 1 kota se-Kalimantan Tengah.'),
      p('Acara pembukaan diawali tarian dari Sanggar Tunjung Nyaho Palangka Raya. Sambutan Sekretaris Daerah Provinsi Kalimantan Tengah dibacakan oleh Sekretaris Dispora, dilanjutkan laporan ketua panitia, sambutan para tokoh, penyematan tanda peserta secara simbolis, dan foto bersama. Badan Kesbangpol Kalimantan Tengah turut hadir, diwakili Kepala Bidang Ketahanan Ekonomi, Sosial, Budaya, Agama, dan Ormas, Yohanni Eveline J., S.T.'),

      h2('Para Narasumber'),
      p('Peserta mendapat materi dari narasumber lintas bidang, di antaranya:'),
      li('Agus Siswadi, Kepala Dinas Pemuda dan Olahraga Provinsi Kalimantan Tengah'),
      li('Dra. Hj. Siti Nafsiah, M.Si., Ketua Komisi II DPRD Provinsi Kalimantan Tengah'),
      li('Dr. Chrisviyanto Spandi, S.H., M.P.P., Staf Khusus Kementerian Pertahanan RI'),
      li('Rona Marina Misasari, jurnalis Metro TV'),
      li('Hafidz Ridha T. S., S.IP., M.IntRel., CLMA, CSDGs, Ketua Langkah Inovasi Indonesia (LII)'),
      li('Rebeka Putri, S.STPar., M.Par., Putri Pariwisata Kalimantan Tengah'),
      li('Tim ahli dari Hasnur Group, tim Growth Mindset, tim KAMU FEST 5.0, serta tokoh-tokoh pemuda inovatif lainnya'),
      p('Keterlibatan Ketua LII sebagai narasumber menjadi bagian dari komitmen Langkah Inovasi Indonesia untuk terus memberdayakan pemuda Kalimantan Tengah.'),

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

      p('Menurut Badan Kesbangpol Kalimantan Tengah, pelatihan ini dirancang untuk membentuk pemuda yang aktif, kritis, dan produktif, sehingga ke depan mampu bersinergi dengan Pemerintah Provinsi dalam menyukseskan target pembangunan daerah. LII berharap para peserta KAMU FEST 5.0 membawa bekal yang mereka dapatkan kembali ke daerah masing-masing dan menjadi penggerak perubahan bagi Kalimantan Tengah.'),
      p('Sumber: rilis Badan Kesbangpol Provinsi Kalimantan Tengah (25 Juni 2026) dan Term of Reference (TOR) Kalteng Maju Festival 2026 5.0.'),
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
