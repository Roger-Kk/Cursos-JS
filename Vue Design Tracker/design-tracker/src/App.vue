<template>
  <main class= "columns is-gapless is-multiline">
    <div class = "column is-one-quarter is-full-mobile">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter is-full-mobile">
      <Formulario />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';


export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    //Lista de Tarefas
  }
});
</script>

<style>

.columns {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 1024px) {
    .columns {
        margin-left: 150px; /* Ajuste da margem da área de conteúdo */
     }
}

</style>
