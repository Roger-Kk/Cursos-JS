<template>
    <div class="box formulario">
        <div>
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Dê uma breve descrição para uma tarefa" v-model="descricao"/>
            </div>
                <div class="colum is-3">
                    <!-- Está com erro na parte de Projetos... arrumar. -->

                    <div class="select">
                        <select v-model="idProjeto">
                            <option value="">
                                Selecione o projeto
                            </option>
                            <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                                {{ projeto.nome }}
                            </option>
                        </select>
                    </div>
                    <!---->
                </div>
            <div class="column">
                <TemporizadorDesign @ao-temporizador-finalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { computed, defineComponent, ref} from 'vue';

import TemporizadorDesign from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
    name: 'FormularioInicial', 
    emits: ['aoSalvarTarefa'],
    components: {
        TemporizadorDesign
    },
    setup (props, {emit}) {
        const store = useStore(key)
        const descricao = ref("")
        const idProjeto = ref("")
        const projetos = computed(() => store.state.projeto.projetos)

        const finalizarTarefa = (tempoDecorrido: number) : void =>{
            emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: descricao.value,
                projeto: projetos.value.find(proj => proj.id == idProjeto.value)
            })
            descricao.value = ''
        }

        return {
            descricao,
            idProjeto,
            projetos, 
            finalizarTarefa 
        }
    }
});
</script>

<style scoped>

.formulario{
        color: var(--texto-primario);
        background-color: var(--bg-primario);
}

.box {
  width: 100%;
  align-items: center;
}
  
</style>
