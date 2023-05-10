export default {
  name: "MusicGroup",
  title: "Music Group",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "genre",
      type: "string",
    },
    {
      name: "album",
      title: "Albums",
      type: "array",
      of: [{ type: "reference", to: [{ type: "MusicAlbum" }] }],
    },
    {
      name: "url",
      title: "Official site",
      type: "url",
    },
    {
      name: "image",
      type: "image",
    }
  ]
}