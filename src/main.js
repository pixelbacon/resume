// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesome from 'vue-awesome'
// Baseline
import App from './App'
import router from './router'
import _data from '@/data.json'
// OUR Components
import AppHeader from '@/components/AppHeader'
import CoverLetter from '@/components/CoverLetter'
import Drive from '@/components/Drive'
import EmploymentHistory from '@/components/EmploymentHistory'
import Experience from '@/components/Experience'
import JobSingle from '@/components/JobSingle'
import Passions from '@/components/Passions'
import Process from '@/components/Process'
import References from '@/components/References'
import SumOfParts from '@/components/SumOfParts'
import Technicalities from '@/components/Technicalities'
import ToDo from '@/components/ToDo'
import WhatIKnow from '@/components/WhatIKnow'
import Work from '@/components/Work'

// 3rd Party
Vue.component('icon', VueAwesome)

// Register OUR components
Vue.component( 'appHeader', AppHeader )
Vue.component( 'coverLetter', CoverLetter )
Vue.component( 'drive', Drive )
Vue.component( 'employmentHistory', EmploymentHistory )
Vue.component( 'experience', Experience )
Vue.component( 'job', JobSingle )
Vue.component( 'passions', Passions )
Vue.component( 'process', Process )
Vue.component( 'references', References )
Vue.component( 'sumOfParts', SumOfParts )
Vue.component( 'technicalities', Technicalities )
Vue.component( 'toDo', ToDo )
Vue.component( 'whatIKnow', WhatIKnow )
Vue.component( 'work', Work )

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
