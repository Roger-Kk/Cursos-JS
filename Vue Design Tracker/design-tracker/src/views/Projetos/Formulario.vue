<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do Projeto
                </label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto"/>
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import useNotificador from '@/hooks/notificador'
import { CADASTRAR_PROJETO, ALTERAR_PROJETO} from '@/store/tipo-acoes';

export default defineComponent({
    name: 'FormularioProjetos',
    props: {
        id:{
            type: String
        }
    },
    mouted (){
        if(this.id){
            const projeto = this.store.state.projeto.projetos.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    data () {
        return {
            nomeDoProjeto: ''
        };
    },
    methods: {
        salvar (){
            if(this.id){
                //Edição de um projeto
                /*this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })*/
                this.store.dispatch(ALTERAR_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                }).then(() => this.lidarComSucesso());
            } else {
                //o método commit chama uma mutation
                //this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
                //o método dispatch aciona uma action
                this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto)
                .then(() => this.lidarComSucesso());
            }
        },
        lidarComSucesso(){
            this.nomeDoProjeto = '';
            this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'A ação foi realizada com sucesso.')
            this.$router.push('/projetos')
        }
    },
    setup (){
        const store = useStore();
        const { notificar } = useNotificador()
        return {
            store,
            notificar
        };
    }
});
</script>


