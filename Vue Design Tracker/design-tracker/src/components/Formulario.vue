<template>
    <div class="box formulario">
        <div>
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja" v-model="descricao">
            </div>
            <div class="column is-4">
                <TemporizadorDesign @ao-temporizador-finalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import TemporizadorDesign from './Temporizador.vue';

export default defineComponent({
    name: 'FormularioInicial', 
    emits: ['aoSalvarTarefa'],
    components: {
        TemporizadorDesign
    },
    data (){
        return {
            descricao: ''
        }
    },
    methods:{
        finalizarTarefa (tempoDecorrido: number) : void{
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
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
