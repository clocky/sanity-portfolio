export default {
  name: "Person",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "alternateName",
      type: "string",
      title: "Alternate name",
      description: "A alias, stage name or pseudonym",
    },
    {
      name: "url",
      title: "Portfolio, biography or LinkedIn",
      type: "url",
    },
    {
      name: "image",
      type: "image",
    }
  ]
}