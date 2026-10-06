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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
  ],
  preview: {
    select: { title: 'judul' },
  },
}
