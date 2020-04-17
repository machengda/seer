import Vue from 'vue'

Vue.filter('br', val => val.replace(/\\n/g, '<br />'))
