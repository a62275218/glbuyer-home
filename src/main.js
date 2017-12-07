import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'

window.$ = $;
let Bootstrap = require('bootstrap')

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})
