// plugins/fontawesome.ts
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importa ícones que você quer usar
import { faUser,
         faCoffee,
         faMagnifyingGlass,
         faBell,
         faMonument,
         faWineBottle,
         faLandmark,
         faQrcode
        } from '@fortawesome/free-solid-svg-icons' 

// Evita que o Font Awesome adicione automaticamente o CSS (a gente importa manualmente)
config.autoAddCss = false

library.add(  faUser,
              faCoffee,
              faMagnifyingGlass,
              faBell, 
              faMonument, 
              faWineBottle, 
              faLandmark,
              faQrcode
            )

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})