// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesome from 'vue-awesome'
import Vuetify from 'vuetify'

// 3rd Party
Vue.use(Vuetify)

// Baseline
import App from './App'
import router from './router'
import _data from '@/data'

// OUR Components
// import AppHeader from '@/components/AppHeader'
// import ContactForm from '@/components/ContactForm'
// import CoverLetter from '@/components/CoverLetter'
// import Drive from '@/components/Drive'
// import EmploymentHistory from '@/components/EmploymentHistory'
// import Experience from '@/components/Experience'
// import JobSingle from '@/components/JobSingle'
// import Notes from '@/components/Notes'
// import Passions from '@/components/Passions'
// import Process from '@/components/Process'
// import References from '@/components/References'
// import SumOfParts from '@/components/SumOfParts'
// import Technicalities from '@/components/Technicalities'
// import ToDo from '@/components/ToDo'
// import WhatIKnow from '@/components/WhatIKnow'
// import Work from '@/components/Work'

// 3rd Party
Vue.component('icon', VueAwesome)

// Register OUR components
// Vue.component( AppHeader.name, AppHeader )
// Vue.component( ContactForm.name, ContactForm )
// Vue.component( CoverLetter.name, CoverLetter )
// Vue.component( Drive.name, Drive )
// Vue.component( EmploymentHistory.name, EmploymentHistory )
// Vue.component( Experience.name, Experience )
// Vue.component( JobSingle.name, JobSingle )
// Vue.component( Notes.name, Notes )
// Vue.component( Passions.name, Passions )
// Vue.component( Process.name, Process )
// Vue.component( References.name, References )
// Vue.component( SumOfParts.name, SumOfParts )
// Vue.component( Technicalities.name, Technicalities )
// Vue.component( ToDo.name, ToDo )
// Vue.component( WhatIKnow.name, WhatIKnow )
// Vue.component( Work.name, Work )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue( {
  el: '#app',
  router,
  data() {
    return _data
  },
  template: '<App/>',
  components: {
    App
  }
} )
