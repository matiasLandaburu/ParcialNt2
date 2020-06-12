import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store ({
    state: {
        contactos : [],
        login:false
    },
    actions : {
        getContactos({commit}, listaContactos){
            commit('getContactos', listaContactos)
        },
        cambiarLogin({commit}, ){
            commit('cambiarLogin')
        },
        
    },
    mutations : {
        getContactos(state,listaContactos){
            state.contactos = listaContactos
          
            
        },
        cambiarLogin(state){
            state.login = true
            
            
        },

    }
})