import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import ProjetosCadastrados from "../views/Projetos.vue";
import FormularioProjetos from "../views/Projetos/Formulario.vue"
import ListaProjetos from "../views/Projetos/Lista.vue"


const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tarefas
},
{
    path: '/projetos',
    component: ProjetosCadastrados,
    children: [
        {
            path: '',
            name: 'Projetos',
            component: ListaProjetos
        },
        {
            path: 'novo',
            name: 'Novo projeto',
            component: FormularioProjetos
        
        },
        {
            path: ':id',
            name: 'Editar projeto',
            component: FormularioProjetos,
            props: true
        },
    ]
}
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;