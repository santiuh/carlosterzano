// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config()
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    ['nuxt-mail', {
      message: {
        to: process.env.EMAIL_TO, 
      },
      smtp: {
        host: process.env.SMTP_HOST, 
        port: process.env.SMTP_PORT, 
        auth: {    
          user: process.env.SMTP_USER, 
          pass: process.env.SMTP_PASS, 
        },
      },
    }],
    ["@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Inter: [400, 700],
          "Josefin+Sans": true,
          Lato: [100, 300],
          Montserrat: {
            wght: [100, 400, 700],
            ital: [100],
          },
          "Manrope": {
            wght: [400, 500, 600, 700, 800],
          },
          "Space+Grotesk": {
            wght: [400, 500, 600, 700, 800],
          },
        },
      },
    ],
  ],
})