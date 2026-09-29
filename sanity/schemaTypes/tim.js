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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'inisial',
      title: 'Inisial (untuk avatar)',
      type: 'string',
      validation: (Rule) => Rule.required().max(2),
    },
  ],
  preview: {
    select: { title: 'nama', subtitle: 'peran' },
  },
}
