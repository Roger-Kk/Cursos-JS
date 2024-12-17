<template>
    <div class="is-flex is align-itens-center is-justify-content-space-between" style="gap: 2rem;">    
        <div class="cronometro">
            <CronometroTempo :tempoEmSegundos="tempoEmSegundos"/> 
        </div>      
        <BotaoDesign @clicado="iniciar" icone="fas fa-play" texto="Play" :desabilitado="cronometroRodando"/>
        <!---->
        <BotaoDesign @clicado="pausar" icone="fas fa-pause" texto="Pause" :desabilitado="!cronometroRodando"/>
        <BotaoDesign @clicado="finalizar" icone="fas fa-stop" texto="Stop" :desabilitado="!cronometroIniciado"/>
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
            cronometroIniciado: false,
            cronometroRodando: false
        }
    },
    methods:{
        iniciar(){
            this.cronometroRodando = true
            this.cronometroIniciado = true
            this.cronometro = setInterval(()=>{
                this.tempoEmSegundos += 1
            }, 1000)
        },
        
        pausar(){
            clearInterval(this.cronometro)
            this.cronometroRodando = false
        },
        
        finalizar(){
            this.cronometroRodando = false
            this.cronometroIniciado = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
})
</script>

<style scoped>

.cronometro{
    background-color: white;
    padding: 0.5rem;
    border-radius: 7px;
}

</style>
