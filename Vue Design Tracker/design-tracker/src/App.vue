<template>
  <!-- <main class= "columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">  -->
  <main class="container" :class="{ 'modo-escuro': modoEscuroAtivo }">
   <!--<div class = "column is-one-quarter is-full-mobile"> --> 
    <div class="barra-lateral">
      <BarraLateral :modoEscuroAtivo="modoEscuroAtivo" @aoTemaAlterado="trocarTema"/>
    </div>
   <!-- <div class="column is-three-quarter is-full-mobile conteudo"> --> 
    <div class="conteudo">
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

<style scoped>

main{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  --bg-primario: #fff;
  --texto-primario: #000;
}

.container {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
}

main.modo-escuro{
  --bg-primario: #2b2d42;
  --texto-primario: #181818;
}

.barra-lateral {
  flex: 1 1 15%; 
  background-color: #0d3b66; /* Cor de fundo para a barra lateral */
  color: white;
  padding: 10px;
  box-sizing: border-box;
}

.conteudo {
  flex: 1 1 80%;
  background-color: var(--bg-primario); /* Cor de fundo para o conteúdo */
  color: #181818;
  padding: 20px;
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column; /* Organiza em coluna para telas menores */
  }

  .barra-lateral {
    flex: 1 1 100%; /* Barra lateral ocupa 100% da largura */
    padding: 10px;
    max-height: 100px; /* Reduz o padding */
  }

  .conteudo {
    flex: 1 1 100%; /* Conteúdo ocupa 100% da largura */
    padding: 10px; /* Reduz o padding */
  }

}

</style>