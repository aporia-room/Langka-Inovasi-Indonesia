export default {
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul Program',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Deskripsi',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gambar',
      title: 'Gambar Program',
      type: 'image',
      description: 'Foto kegiatan program. Sebaiknya foto mendatar (landscape). Bisa diatur titik fokusnya setelah diunggah.',
      options: { hotspot: true },
    },
    {
      name: 'galeri',
      title: 'Galeri Foto (opsional)',
      type: 'array',
      description: 'Foto-foto tambahan kegiatan. Ditampilkan utuh (tidak dipotong) saat diklik.',
      of: [{ type: 'image' }],
      options: { layout: 'grid' },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
  ],
  preview: {
    select: { title: 'judul', media: 'gambar' },
  },
}
