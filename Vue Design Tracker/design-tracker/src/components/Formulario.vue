<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja" v-model="descricao">
            </div>
            <div class="column">
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

<style>

    .formulario{
        color: var(--texto-primario);
        background-color: var(--bg-primario);
    }

</style>
<style scoped>

.box {
    width: 100%;
  max-width: 1200px ;
  align-items: center;
}

.columns {
  display: flex;
  justify-content: space-between;
}

.column {
  padding: 0 1rem;
}

.column input.input {
  width: 100%;
}

.is-flex {
  display: flex;
}
  
</style>
