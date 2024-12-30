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

import { computed, defineComponent } from 'vue';

import TemporizadorDesign from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
    name: 'FormularioInicial', 
    emits: ['aoSalvarTarefa'],
    components: {
        TemporizadorDesign
    },
    data (){
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    methods:{
        finalizarTarefa (tempoDecorrido: number) : void{
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricao = ''
        }
    },
    setup () {
            const store = useStore(key)
            return {
                projetos: computed(() => store.state.projeto.projetos)
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
