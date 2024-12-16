<template>
    <BoxDesign>
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <CronometroTempo :tempoEmSegundos="tarefa.duracaoEmSegundos"/>

            </div>
        </div>
    </BoxDesign>
</template>

<script lang="ts">

    import { defineComponent, PropType } from 'vue'
    import CronometroTempo from './Cronometro.vue'
    import ITarefa from '@/interfaces/ITarefa'
    import BoxDesign from './Box.vue'
    
    export default defineComponent({
        name: 'TarefaLista', 
        components: {
            CronometroTempo, 
            BoxDesign
        },
        props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
    })

</script>


