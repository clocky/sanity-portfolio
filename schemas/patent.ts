
export default {
  name: "Patent",
  title: "Patent",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Patent Name",
    },
    {
      name: "patentNumber",
      type: "string",
      title: "Patent Number",
    },
    {
      name: "filingDate",
      type: "date",
      title: "Filing Date",
    },
    {
      name: "publicationDate",
      type: "date",
      title: "Publication Date",
    },
    {
      name: "status",
      type: "string",
      title: "Status",
    },
    {
      name: "abstract",
      type: "text",
      title: "Abstract",
    },
    {
      name: "inventor",
      type: "array",
      title: "Inventor",
      of: [
        {
          type: "reference",
          to: [{ type: "Person" }],
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Filing Date, New",
      name: "filingDateDesc",
      by: [
        {
          field: "filingDate",
          direction: "desc",
        },
      ],
    },
  ],
  initialValue: {
  },
  preview: {
    select: {
      title: "name",
      subtitle: "patentNumber",
    },
  }
}