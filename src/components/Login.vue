<template lang="html">

   <section class="src-components-formulario">
    <div class="jumbotron m-3">
      <h1>Alta de Usuario</h1>
      <hr />
      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
          <label for="usuario" class="mt-3">Usuario</label>
          <input
            type="text"
            class="form-control"
            id="usuario"
            name="usuario"
            autocomplete="off"
            v-model.trim="formData.usuario"
            required
          />

          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo descripcion requerido</div>            
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="contrasenia" class="mt-3">Contraseña</label>
          <input
            type="text"
            class="form-control"
            id="contrasenia"
            name="contrasenia"
            autocomplete="off"
            v-model.trim="formData.contrasenia"
            required
          />

          <field-messages name="contrasenia" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo contraseña requerido</div>            

          </field-messages>
        </validate>

        <button class="btn btn-success mt-3" type="submit" :disabled="formState.$invalid" >Login</button>



      </vue-form>
    </div>
  </section>

</template>

<script lang="js">
import { urlLogin } from '../urls'
  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
 
    },
    data () {
      return {
        formState: {},
        formData: this.getDatosIniciales(),


      }
    },
    methods: {
       getDatosIniciales(){
        return {
          usuario:'',
          contrasenia: ''
        }
      },

      enviar() {
        console.log(this.formData)
        this.axios.post(urlLogin, this.formData, {
          'content-type' : 'application/json'
        })
        .then( res => {
          if(res.data.usuario == 'ROOT' && res.data.contrasenia == '1234' ){
            this.$store.actions.cambiarLogin
             window.location.href = 'http://localhost:8080/Tareas';
            // this.router.push("/Tareas")
          }
        })
        .catch(error => {
          console.log('ERROR POST', error)
        })
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
.jumbotron {
    background-color: rgb(173, 35, 62);
    color: white;
}

hr {
    background-color: white;
}

pre {
    color: white;
}
</style>
