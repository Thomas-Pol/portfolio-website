import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
 fields: [
  {
    name: 'projectName',
    label: 'Project name',
    type: 'text',
    required: true,
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    required: true,
  },
  {
    name: 'image',
    label: 'Image',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'linkGitHub',
    label: 'Link GitHub',
    type: 'text',
    required: true,
  },
  {
    name: 'linkLive',
    label: 'Link Live',
    type: 'text',
    required: true,
  },
],

}
