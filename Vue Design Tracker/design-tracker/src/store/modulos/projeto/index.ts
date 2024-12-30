import http from "@/http";
import { INotificacao } from "@/interfaces/INotificacao";
import IProjeto from "@/interfaces/IProjeto";
import ITarefa from "@/interfaces/ITarefa";
import { Estado } from "@/store";
import { ALTERAR_TAREFA, OBTER_PROJETOS, CADASTRAR_PROJETO, ALTERAR_PROJETO, REMOVER_PROJETO, OBTER_TAREFAS, CADASTRAR_TAREFA } from "@/store/tipo-acoes";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, DEFINIR_PROJETOS, DEFINIR_TAREFAS, ADICIONA_TAREFAS, NOTIFICAR } from "@/store/tipo-mutacoes";
import { Module } from "vuex";

export interface EstadoProjeto {
    projetos: IProjeto[]
}

export const projeto: Module<EstadoProjeto, Estado> = {
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto || 'Sem projetos cadastrados.'
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO] (state, projeto: IProjeto){
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO] (state, id:string){
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [DEFINIR_PROJETOS] (state, projetos: IProjeto[]){
            state.projetos = projetos
        },
    },
    actions: {
        [OBTER_PROJETOS] ({ commit }){
            http.get('projetos')
                .then(resposta => commit(DEFINIR_PROJETOS, resposta.data))
        },
        [CADASTRAR_PROJETO] (contexto, nomeDoProjeto: string){
            return http.post('/projetos', {
                nome: nomeDoProjeto
            })
        },
        [ALTERAR_PROJETO] (contexto, projeto: IProjeto){
            return http.put(`/projetos/${projeto.id}`, projeto)
        },
        [REMOVER_PROJETO] ({commit}, id: string){
            return http.delete(`/projetos/${id}`)
                .then(() => commit(EXCLUIR_PROJETO, id))
        }
    }
}