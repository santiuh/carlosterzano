// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", [
    "@nuxtjs/google-fonts",
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
        
        "Lexend+Deca": {
          wght: [400, 500, 600, 700, 800],
        },
        "Space+Grotesk": {
          wght: [400, 500, 600, 700, 800],
        },
      },
    },
  ],]
})