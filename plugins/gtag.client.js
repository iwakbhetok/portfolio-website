import { defineNuxtPlugin } from '#app'
import { useGtag } from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  useGtag({
    property: {
      id: 'G-3PR4H2TZ46'
    }
  }, nuxtApp.vueApp)
})
