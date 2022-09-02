import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: '',
            buildAssetsDir: "/patras-medicine/_nuxt/",
            htmlAttrs: {
              lang: 'en'
            },
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { hid: 'description', name: 'description', content: '' },
              { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
              { rel: 'icon', type: 'image/x-icon', href: 'https://static.igem.wiki/teams/4118/wiki/favicon.png' }
            ]
        }
    }, 
    
    css: [
        'assets/styles/main.scss'
      ],

    plugins: [
        { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" }
      ],
})
