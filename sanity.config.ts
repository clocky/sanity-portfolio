import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { contentGraphView } from "sanity-plugin-graph-view";
import { media } from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Mark\'s Portfolio',

  projectId: 'wh13rzj7',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), contentGraphView({}), media(),],

  schema: {
    types: schemaTypes,
  },
})
