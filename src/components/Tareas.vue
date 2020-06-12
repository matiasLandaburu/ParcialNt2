<template >

  <section class="src-components-tareas">
    <formulario/>
    <Registro/>
  <p>Respuestas:
        1-C,
        2-C,
        3-C,
        4-B,
        5-A,
        6-B,
        7-D,
        8-D,
        9-D,
        10-B
      </p>
  </section>

</template>

<script lang="js">
  import Formulario from './Formulario.vue'
  import Registro from './Registro.vue'
  export default  {

    name: 'src-components-tareas',
    props: [],
    components:{
      Formulario,
      Registro
    },
    mounted () {

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
  .src-components-tareas {

  }
</style>
