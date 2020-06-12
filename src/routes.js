import Vue from  'vue'
import VueRouter from 'vue-router'


import Tareas from './components/Tareas.vue'



Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect:'/Tareas'},
        {path: '/Tareas', component: Tareas},
        
    ]
    

})