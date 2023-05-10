export default {
  name: "Organization",
  title: "Organization",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "url",
      title: "Website",
      type: "url",
    },
    {
      name: "legalName",
      title: "Legal Name",
      type: "string",

    }
  ]
}