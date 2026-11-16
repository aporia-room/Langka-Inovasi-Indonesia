'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'lii-studio',
  title: 'LII — Studio Konten',
  basePath: '/studio',

  projectId: 'ksiczign',
  dataset: 'production',

  // Login lewat token di browser, bukan cookie. Cookie dari sanity.io dianggap pihak ketiga
  // dan diblokir di sebagian HP/browser, yang membuat Studio berhenti di layar kosong setelah login.
  auth: { loginMethod: 'token' },

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})