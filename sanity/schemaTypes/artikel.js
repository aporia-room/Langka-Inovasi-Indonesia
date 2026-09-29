export default {
  name: 'artikel',
  title: 'Artikel / Publikasi',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul Artikel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'judul', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cat',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Opini', value: 'Opini' },
          { title: 'Policy Brief', value: 'Policy Brief' },
          { title: 'Berita', value: 'Berita' },
          { title: 'Riset', value: 'Riset' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'penulis',
      title: 'Penulis',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tanggal',
      title: 'Tanggal Publikasi',
      type: 'date',
      options: { dateFormat: 'DD MMM YYYY' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gambar',
      title: 'Gambar Cover',
      type: 'image',
      options: { hotspot: true },
      description: 'Gambar yang tampil di kartu artikel dan halaman detail',
    },
    {
      name: 'desc',
      title: 'Ringkasan',
      type: 'text',
      rows: 3,
      description: 'Tampil di kartu artikel (maks 300 karakter)',
      validation: (Rule) => Rule.required().max(300),
    },
    {
      name: 'linkEksternal',
      title: 'Link Eksternal (opsional)',
      type: 'url',
      description: 'Jika artikel dipublikasikan di platform lain (Medium, Google Drive, dll), tempel link-nya di sini. Jika diisi, tombol "Baca" akan mengarah ke link ini.',
    },
    {
      name: 'body',
      title: 'Isi Artikel',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Keterangan Gambar',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'judul',
      subtitle: 'cat',
      media: 'gambar',
    },
  },
}