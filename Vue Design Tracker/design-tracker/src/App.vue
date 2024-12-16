<template>
  <main class= "columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class = "column is-one-quarter is-full-mobile">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter is-full-mobile conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaLista v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxDesign v-if="listaEstaVazia">
          Lista de Tarefas: Inicie uma tarefa executando o Play. 
        </BoxDesign>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import TarefaLista from './components/Tarefa.vue';
import ITarefa from './interfaces/ITarefa';
import BoxDesign from './components/Box.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    TarefaLista,
    BoxDesign
  }, 
  data (){
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  }, 
  computed:{
    listaEstaVazia() :boolean {
      return this.tarefas.length===0
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema(modoEscuroAtivo: boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>

main{
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro{
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo{
  background-color: var(--bg-primario) ;
}

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
