<template>
    <div class="is-flex is align-itens-center is-justify-content-space-between">    
        <CronometroTempo :tempoEmSegundos="tempoEmSegundos"/>       
        <BotaoDesign @clicado="iniciar" icone="fas fa-play" texto="Play" :desabilitado="cronometroRodando"/>
        <BotaoDesign @clicado="finalizar" icone="fas fa-stop" texto="Stop" :desabilitado="!cronometroRodando"/>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import CronometroTempo from './Cronometro.vue';
import BotaoDesign from './Botao.vue';

export default defineComponent({
    name: 'TemporizadorDesign', 
    emits: ['aoTemporizadorFinalizado'],
    components: {
        CronometroTempo, 
        BotaoDesign
    },
    data() {
        return{
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods:{
        iniciar(){
            this.cronometroRodando = true
            this.cronometro = setInterval(()=>{
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizar(){
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
})
</script>
