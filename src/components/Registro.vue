<template >

  <section class="src-components-vista-usuarios">
        <div class="jumbotron m-3">
      <h1>Lista de tareas</h1>
      <hr>     


      
      <table class="table" v-if="this.$store.state.contactos.length >= 1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Descripcion</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in this.$store.state.contactos" :key="index">
            <td scope="row">{{ usuario.id }}</td>
            <td>{{usuario.descripcion }}</td>
            <td>{{usuario.nombre }}</td>
            <td>{{usuario.email }}</td>
            <td>{{usuario.fecha| fechaFiltro }}</td>
            
          </tr>
        </tbody>

      </table>     

      <div v-else class="alert alert-danger">
        NO HAY TAREAS
      </div>




    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-vista-usuarios',
    props: [],
    mounted () {
      this.getUsuarios()
      console.log(this.usuarios)
    },
    data () {
      return {
          
      }
    },
    methods: {
 
    
    },
    
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-registro {

  }
</style>
