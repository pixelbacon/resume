import Vue from 'vue';
// Components a-la-carte
// @see https://github.com/vuetifyjs/vuetify/issues/3943
// import {
//   Vuetify,
//   VApp,
//   VNavigationDrawer,
//   VFooter,
//   VList,
//   VBtn,
//   VIcon,
//   VGrid,
//   VToolbar,
//   transitions,
// } from 'vuetify';
import Vuetify from 'vuetify/es5/components/Vuetify';
import VApp from 'vuetify/es5/components/VApp';
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer';
import VFooter from 'vuetify/es5/components/VFooter';
import VList from 'vuetify/es5/components/VList';
import VBtn from 'vuetify/es5/components/VBtn';
import VChip from 'vuetify/es5/components/VChip';
import VIcon from 'vuetify/es5/components/VIcon';
import VGrid from 'vuetify/es5/components/VGrid';
import VForm from 'vuetify/es5/components/VForm';
import VTextarea from 'vuetify/es5/components/VTextarea';
import VTextField from 'vuetify/es5/components/VTextField';
import VToolbar from 'vuetify/es5/components/VToolbar';
import VTooltip from 'vuetify/es5/components/VTooltip';
import transitions from 'vuetify/es5/components/transitions';
import { Resize, Ripple, Scroll, Touch } from 'vuetify/es5/directives';

// Import style sheet
import 'vuetify/src/stylus/app.styl';

import theme from './../theme.json';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VForm,
    VList,
    VBtn,
    VChip,
    VIcon,
    VGrid,
    VTextarea,
    VTextField,
    VToolbar,
    VTooltip,
    transitions,
  },
  directives: {
    Resize,
    Ripple,
    Scroll,
    Touch,
  },
  theme: theme.colors,
  customProperties: true,
  iconfont: 'mdi', // 'md' || 'mdi' || 'fa' || 'fa4'
});
