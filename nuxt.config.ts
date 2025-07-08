// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // Add Vuetify styles
  css: [
    'vuetify/styles'
  ],

  // Enable Pinia
  modules: [
    '@pinia/nuxt'
  ]
})
