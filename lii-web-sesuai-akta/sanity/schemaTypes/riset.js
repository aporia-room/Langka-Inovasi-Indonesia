export default {
  name: 'riset',
  title: 'Riset',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul Riset',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Deskripsi',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Berlangsung', value: 'Berlangsung' },
          { title: 'Selesai', value: 'Selesai' },
          { title: 'Direncanakan', value: 'Direncanakan' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: 'judul', subtitle: 'status' },
  },
}
