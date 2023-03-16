import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Footer from './Footer.vue'
import { mount } from 'mount-vue-component'

createApp(App).mount('#app')

const element = document.querySelector('#footer')
mount(Footer, { element })
