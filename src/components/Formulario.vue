<template lang="html">

   <section class="src-components-formulario">
    <div class="jumbotron m-3">
      <h1>Alta de Usuario</h1>
      <hr />
      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
          <label for="descripcion" class="mt-3">Descripcion</label>
          <input
            type="text"
            class="form-control"
            id="descripcion"
            name="descripcion"
            autocomplete="off"
            v-model.trim="formData.descripcion"
            :maxlength="descripcionChrMax"
            :minlength="descripcionChrMin"
            required
          />

          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo descripcion requerido</div>            
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{descripcionChrMin}} caracteres</div>
            <div v-if="formData.descripcion.length == descripcionChrMax" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{descripcionChrMax}})</div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="nombre" class="mt-3">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            name="nombre"
            autocomplete="off"
            v-model.trim="formData.nombre"
            :maxlength="nombreChrMax"
            :minlength="nombreChrMin"
            required
          />

          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>            
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{nombreChrMin}} caracteres</div>
            <div v-if="formData.nombre.length == nombreChrMax" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{nombreChrMax}})</div>
          </field-messages>
        </validate>



        <validate tag="div">
          <label for="email" class="mt-3">Correo Electrónico</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            autocomplete="off"
            v-model="formData.email"            
            required
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Correo Electrónico requerido</div>
            <div slot="email" class="alert alert-danger my-1">Correo Electrónico no válido</div>
          </field-messages>
        </validate>

      <br>


        <button class="btn btn-success mt-3" type="submit" :disabled="formState.$invalid" >Agregar tarea</button>

      </vue-form>
    </div>
  </section>

</template>

<script lang="js">
import { urlUsuarios } from '../urls'
  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
 
    },
    data () {
      return {
        formState: {},
        formData: this.getDatosIniciales(),
        nombreChrMin: 5,
        nombreChrMax: 15,
        descripcionChrMin: 10,
        descripcionChrMax: 50,

      }
    },
    methods: {
       getDatosIniciales(){
        return {
          descripcion:'',
          nombre: '',
          email: ''
        }
      },

      enviar() {
        console.log(this.formData)
        this.axios.post(urlUsuarios, this.formData, {
          'content-type' : 'application/json'
        })
        .then( res => {
          console.log(res.data)
          this.formData = this.getDatosIniciales()
          this.formState._reset()
          this.getUsuarios()
        })
        .catch(error => {
          console.log('ERROR POST', error)
        })
      }
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
