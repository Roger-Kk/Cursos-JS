<template>
    <!--Visualização de acordo com a URL (rota)-->
    <Formulario @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
        <BoxDesign v-if="listaEstaVazia">
        Inicie uma tarefa executando o Play. 
        </BoxDesign>
        <TarefaLista v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @aoTarefaClicada="selecionarTarefa"/>
        <div class="modal" :class="{'is-active': tarefaSelecionada}" v-if="tarefaSelecionada">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-header">
              <p class="modal-card-title">Editar Tarefa</p>
              <button class="delete" aria-label="close" @click="fecharModal"></button>
            </header>
            <section class="modal-card-body">
              <div class="field">
                <label for="descricaoDaTarefa" class="label">
                    Descricao
                </label>
                <input type="text" class="input" v-model="tarefaSelecionada.descricao" id="nomeDoProjeto"/>
            </div>
            </section>
            <footer class="modal-card-footer">
              <button class=" button is-success" @click="alterarTarefa">Salvar</button>
              <button class="button" @click="fecharModal">Cancelar</button>
            </footer>
          </div>
        </div>
    </div>
</template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue';
  import Formulario from '../components/Formulario.vue';
  import TarefaLista from '../components/Tarefa.vue';
  import BoxDesign from '../components/Box.vue';
  import { useStore } from '@/store';
  import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
  import ITarefa from '@/interfaces/ITarefa';
  
  export default defineComponent({
    name: 'App',
    components: {
      Formulario,
      TarefaLista,
      BoxDesign
    }, 
    data (){
      return{
        tarefaSelecionada: null as ITarefa | null
      }
    },
    methods: {
      salvarTarefa (tarefa: ITarefa) {
        this.store.dispatch(CADASTRAR_TAREFA, tarefa)
      },
      selecionarTarefa (tarefa: ITarefa){
      this.tarefaSelecionada = tarefa
      },
      fecharModal (){
        this.tarefaSelecionada = null
     },
     alterarTarefa (){
      this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada).then(() => this.fecharModal())
     }
    },
    computed:{
      listaEstaVazia() :boolean {
        return this.tarefas.length===0
      }
    },
    setup (){
        const store = useStore();
        store.dispatch(OBTER_TAREFAS)
        store.dispatch(OBTER_PROJETOS)
        return {
            tarefas: computed(() => store.state.tarefas),
            store
        };
    },
    
  });
  </script>
