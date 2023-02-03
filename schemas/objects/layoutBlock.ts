import { defineArrayMember, defineField, defineType } from 'sanity'

import { LayoutBlockPreview } from './LayoutBlockPreview'

export default defineType({
  name: 'layoutBlock',
  title: 'Layout block',
  type: 'object',
  components: {
    preview: LayoutBlockPreview,
  },
  fields: [
    defineField({
      name: 'width',
      title: 'Block width',
      description: 'Block width',
      type: 'string',
      options: {
        list: [
          { title: 'Reading width', value: 'readingWidth' },
          { title: 'Full width', value: 'fullWidth' },
        ],
      },
      initialValue: 'readingWidth',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'richTextBlock',
          title: 'Rich Text Block',
          type: 'object',
          fields: [
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'block' }],
            }),
          ],
        }),
      ],
    }),
  ],
})
