import MusicAlbumReleaseType from './musicAlbumReleaseType'
import musicAlbumProductionType from './musicAlbumProductionType'
export default {
  name: "MusicAlbum",
  title: "Albums",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "albumReleaseType",
      title: "Album Release Type",
      description: "The kind of release which this album is",
      type: "string",
      options: {
        list: [
          ...MusicAlbumReleaseType
        ],
      }
    },
    {
      name: "albumProductionType",
      title: "Album Production Type",
      description: "Classification of the album by its type of content",
      type: "string",
      options: {
        list: [
          ...musicAlbumProductionType
        ],
      }
    },
    {
      name: "byArtist",
      title: "By Artist",
      type: "reference",
      to: [{ type: "MusicGroup" }],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "datePublished",
      type: "date",
      title: "Publication date",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "byArtist.name",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Publication date, new",
      name: "datePublishedDesc",
      by: [
        { field: "datePublished", direction: "desc" },
      ],
    },
  ],
  initialValue: {
    albumReleaseType: "AlbumRelease",
    albumProductionType: "StudioAlbum"
  }
}