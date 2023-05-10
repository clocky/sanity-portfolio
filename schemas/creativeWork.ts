import slugify from '@sindresorhus/slugify';

export default {
  name: "CreativeWork",
  title: "Creative Work",
  type: "document",
  preview: {
    select: {
      title: "name",
      subtitle: "publisher.name",
      media: "image",
    },
  },

  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input: string) => slugify(input, { decamelize: false, lowercase: true })
      }
    },
    {
      name: "genre",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "headline",
      type: "string",
    },
    {
      name: "abstract",
      type: "text",
      title: "Abstract",
      description: "A short description that summarizes a CreativeWork.",
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: "contributor",
      title: "Contributors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "Person" }, { type: "Organization" }] }],
    },
    {
      name: "datePublished",
      type: "date",
      title: "Launch date",
    },
    {
      name: "sourceOrganization",
      type: "reference",
      description: "Who funded and requested the project?",
      to: [{ type: "Organization" }],
    },
    {
      name: "publisher",
      type: "reference",
      description: "Who published this project?",
      to: [{ type: "Organization" }],
    },
    {
      name: "mainEntityOfPage",
      type: "array",
      of: [{ type: "reference", to: [{ type: "Article" }] }],
    },
    {
      name: "award",
      type: "array",
      of: [{ type: "string" }],
      description: "Awards won by or for this item",
    },
    {
      name: "about",
      type: "reference",
      description: "If music related, the artist or band",
      to: [{ type: "MusicGroup" }],
    }

  ],
  orderings: [
    {
      title: "Date published, New",
      name: "datePublishedDesc",
      by: [
        { field: "datePublished", direction: "desc" },
      ]
    }
  ]
}