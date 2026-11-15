// Event yang tampil di kolom "Event" beranda dan halaman /event.
// Status (Akan Datang / Berlangsung / Selesai) dihitung otomatis dari tanggal.
export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Nama Event',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mulai',
      title: 'Tanggal Mulai',
      type: 'date',
      options: { dateFormat: 'DD MMM YYYY' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'selesai',
      title: 'Tanggal Selesai',
      type: 'date',
      options: { dateFormat: 'DD MMM YYYY' },
      description: 'Isi hanya kalau event berlangsung lebih dari satu hari. Kosongkan kalau sehari.',
    },
    {
      name: 'waktu',
      title: 'Jam / Waktu',
      type: 'string',
      description: 'Contoh: 19.00 WIB atau Daring',
    },
    {
      name: 'tempat',
      title: 'Tempat',
      type: 'string',
      description: 'Contoh: Instagram @langkahinovasiindonesia',
    },
    {
      name: 'link',
      title: 'Tautan (opsional)',
      type: 'string',
      description:
        'Halaman berita di website, contoh: /blog/nama-artikel — atau tautan luar yang diawali https://',
    },
  ],
  orderings: [
    { title: 'Tanggal mulai (terbaru)', name: 'mulaiDesc', by: [{ field: 'mulai', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'judul', subtitle: 'mulai' },
  },
}
