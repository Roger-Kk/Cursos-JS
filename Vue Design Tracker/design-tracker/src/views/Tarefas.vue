<template>
    <!--Visualização de acordo com a URL (rota)-->
    <Formulario @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
        <BoxDesign v-if="listaEstaVazia">
        Inicie uma tarefa executando o Play. 
        </BoxDesign>
        <TarefaLista v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Formulario from '../components/Formulario.vue';
  import TarefaLista from '../components/Tarefa.vue';
  import ITarefa from '../interfaces/ITarefa';
  import BoxDesign from '../components/Box.vue';
  
  export default defineComponent({
    name: 'App',
    components: {
      Formulario,
      TarefaLista,
      BoxDesign
    }, 
    data (){
      return {
        tarefas: [] as ITarefa[],
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
      }
    }
    });
  </script>
