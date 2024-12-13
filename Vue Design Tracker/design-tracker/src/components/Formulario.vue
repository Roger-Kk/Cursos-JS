<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja">
            </div>
            <div class="column">
                <div class="is-flex is align-itens-center is-justify-content-space-between">
                    <section>
                    <strong>{{tempoDecorrido}}</strong>
                    </section>
                    <button class="button" @click="iniciar">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>Play</span>
                    </button>
                    <button class="button" @click="finalizar">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>Parar</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'FormularioInicial', 
    data() {
        return{
            tempoEmSegundos: 0,
            cronometro: 0
        }
    },
    computed: {
        tempoDecorrido(): string{
            return new Date(this.tempoEmSegundos*1000).toISOString().substr(11, 8)
        }
    },
    methods:{
        iniciar(){
            this.cronometro = setInterval(()=>{
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizar(){
            clearInterval(this.cronometro)
        }
    }
})
</script>

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
