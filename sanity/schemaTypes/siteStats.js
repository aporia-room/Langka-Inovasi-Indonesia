// Schema ini untuk mengatur angka statistik di hero beranda
// Buat 1 dokumen saja di Sanity Studio → Site Stats
export default {
  name: 'siteStats',
  title: 'Statistik Beranda',
  type: 'document',
  // Hanya boleh ada 1 dokumen
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'risetSelesai',
      title: 'Riset Selesai',
      type: 'string',
      description: 'Contoh: "12+" atau "15"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'programAktif',
      title: 'Program Unggulan',
      type: 'string',
      description: 'Contoh: "5" atau "7+"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tahunBerdiri',
      title: 'Tahun Berdiri (label)',
      type: 'string',
      description: 'Contoh: "2025" — ini teks yang tampil di beranda',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return { title: 'Statistik Beranda' }
    },
  },
}
