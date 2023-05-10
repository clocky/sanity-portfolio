
export default {
  name: "Article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "headline",
      type: "string",
      title: "Headline",
      description: "Headline of the article"
    },
    {
      name: "alternativeHeadline",
      type: "string",
      title: "Alternative headline",
      description: "A secondary title of the article"
    },
    {
      name: "url",
      type: "url",
      title: "URL",
    },
    {
      name: "abstract",
      type: "text",
      title: "Abstract",
      description: "A short description that summarizes the article",
    },
    {
      name: "datePublished",
      type: "date",
      title: "Publication date",
    },
    {
      name: "inLanguage",
      type: "string",
      title: "Language",
      description: "The language of the content. Please use one of the language codes from the IETF BCP 47 standard.",
    },
    {
      name: "publisher",
      type: "reference",
      title: "Publisher",
      to: [{ type: "Organization" }, { type: "Person" }],
    },
  ],
  orderings: [
    {
      title: 'Publication date, new',
      name: 'datePublishedDesc',
      by: [
        { field: 'datePublished', direction: 'desc' }
      ],
    },
  ],
  initialValue: {
    inLanguage: "en"
  },
  preview: {
    select: {
      title: "headline",
      subtitle: "publisher.name",
      media: "publisher.logo",
    },
  }
}