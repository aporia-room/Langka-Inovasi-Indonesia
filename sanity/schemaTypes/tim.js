export default {
  name: 'tim',
  title: 'Tim',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'peran',
      title: 'Peran / Jabatan',
      type: 'string',
      description: 'Contoh: Ketua, Sekretaris, Bendahara',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'foto',
      title: 'Foto',
      type: 'image',
      description: 'Sebaiknya foto persegi (1:1), wajah di tengah',
      options: { hotspot: true },
    },
    {
      name: 'profil',
      title: 'Profil Singkat',
      type: 'text',
      rows: 5,
      description: 'Muncul saat kartu orang ini diklik. 2-4 kalimat sudah cukup.',
    },
    {
      name: 'urutan',
      title: 'Urutan Tampil',
      type: 'number',
      description: 'Angka kecil tampil lebih dulu. Contoh: Ketua = 1, Wakil Ketua = 2',
    },
    {
      name: 'inisial',
      title: 'Inisial (dipakai kalau belum ada foto)',
      type: 'string',
      validation: (Rule) => Rule.max(2),
    },
  ],
  orderings: [
    { title: 'Urutan Tampil', name: 'urutanAsc', by: [{ field: 'urutan', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'nama', subtitle: 'peran', media: 'foto' },
  },
}
