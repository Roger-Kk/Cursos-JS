<template>
    <BoxDesign>
        <div class="columns clicavel" @click="tarefaClicada">
            <div class="column is-4">
                {{tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'Sem projeto vinculado' }}
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
        emits: ['aoTarefaClicada'],
        components: {
            CronometroTempo, 
            BoxDesign
        },
        props: {
            tarefa: {
                type: Object as PropType<ITarefa>,
                required: true
            }
        },
        methods: {
            tarefaClicada () : void {
                this.$emit('aoTarefaClicada', this.tarefa)
            }
        }
    })
</script>
<style scoped>

.clicavel {
    cursor: pointer;
}

</style>


