import Vue from 'vue'
import { urlUsuarios } from './urls'
var miMixin = {
    methods:{
        getUsuarios() {
            this.axios.get(urlUsuarios)
            .then( res => {
              console.log(res.data)
              this.$store.dispatch('getContactos', res.data)
              this.usuarios = res.data
              if(this.$store.state.contactos != 0){
                this.hayUsuarios = 1  
              }else{
                this.hayUsuarios = 2
              }          
            })
            .catch(error => {
              console.log('ERROR GET HTTP', error)
    
            })
          },
        

    },
    computed: { 
        mostrarCantidadUsuarios(){
            return this.$store.state.cant
        }
    }
}

Vue.mixin(miMixin)