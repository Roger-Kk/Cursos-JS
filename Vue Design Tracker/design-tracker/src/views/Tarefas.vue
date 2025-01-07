<template>
    <!--Visualização de acordo com a URL (rota)-->
    <Formulario @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
        <BoxDesign v-if="listaEstaVazia">
        Inicie uma tarefa executando o Play. 
        </BoxDesign>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input type="text" class="input" placeholder="Digite para filtrar" v-model="filtro" />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>
        <TarefaLista v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @aoTarefaClicada="selecionarTarefa"/>
       <ModalDesign :mostrar="tarefaSelecionada != null">
          <template v-slot:cabecalho>
              <p class="modal-card-title">Editar Tarefa</p>
              <button class="delete" aria-label="close" @click="fecharModal"></button>
          </template>
          <template v-slot:corpo>
            <div class="field">
              <label for="descricaoDaTarefa" class="label">
                 Descricao
              </label>
              <input type="text" class="input" v-model="tarefaSelecionada.descricao" id="descricaoDaTarefa"/>
            </div>
          </template>
          <template v-slot:rodape>
            <button @click="alterarTarefa" class=" button is-success">Salvar</button>
            <button @click="fecharModal" class="button"> Cancelar </button>
          </template>
        </ModalDesign>
    </div>
</template>
  
  <script lang="ts">
  import { computed, defineComponent, ref, watchEffect } from 'vue';
  import Formulario from '../components/Formulario.vue';
  import TarefaLista from '../components/Tarefa.vue';
  import BoxDesign from '../components/Box.vue';
  import ModalDesign from '../components/Modal.vue';
  import { useStore } from '@/store';
  import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
  import ITarefa from '@/interfaces/ITarefa';
  
  export default defineComponent({
    name: 'App',
    components: {
      Formulario,
      TarefaLista,
      BoxDesign, 
      ModalDesign
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
        store.dispatch(OBTER_TAREFAS);
        store.dispatch(OBTER_PROJETOS);
        const filtro = ref('');
        const tarefas = computed(() => store.state.tarefas.filter((t) => !filtro.value || t.descricao.includes(filtro.value)));

        watchEffect(() => {
          store.dispatch(OBTER_TAREFAS, filtro.value)
        })

        return {
            tarefas,
            store,
            filtro
        };
    },
    
  });
  </script>
