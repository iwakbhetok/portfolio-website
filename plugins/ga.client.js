// plugins/ga.client.ts
import { defineNuxtPlugin } from '#app'
import { useHead } from '#imports'

export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=G-3PR4H2TZ46`, 
        async: true,
      }
    ],
    innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3PR4H2TZ46'); 
    `,
  })
})
