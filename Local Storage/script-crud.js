//****************************Variáveis****************************
const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const btnCancelar = document.querySelector('.app__form-footer__button--cancel');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');
const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas');
const btnRemoverTodas = document.querySelector('#btn-remover-todas');
//const tarefas = [] esse const é substituído pela linha abaixo para pegar as tarefas salvas em localstorage
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
//o "ou array vazio: || []" serve para caso não haja tarefas cadastradas a const tarefas vai receber um array vazio
let tarefaSelecionada = null;
let liTarefaSelecionada = null;


//****************************Funções******************************
//Transforma uma tarefa em um elemento que representa essa tarefa
function criarElementoTarefa(tarefa){
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')
    const svg = document.createElement('svg')
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>
    `
   const paragrafo = document.createElement('p')
   paragrafo.textContent = tarefa.descricao
   paragrafo.classList.add('app__section-task-list-item-description')

   const botao = document.createElement('button')
   botao.classList.add('app_button-edit')
   botao.onclick = () => {
        //debugger  -> Pode-se usar o debugger para debugar o código passo a passo.
        const novaDescricao = prompt("Qual é o novo nome da tarefa?")
        console.log('Nova descrição da tarefa: ', novaDescricao)
        if (novaDescricao){
            paragrafo.textContent = novaDescricao
            tarefa.descricao = novaDescricao
            atualizarTarefas()
        }
   }
    
   const imagemBotao = document.createElement('img')
   imagemBotao.setAttribute('src','./imagens/edit.png')

   botao.append(imagemBotao) //o método append insere no elemento html outro elemento, no caso a imagem no botão
   li.append(svg)
   li.append(paragrafo)
   li.append(botao)

   //Se a tarefa estiver completa, deixa o li em verde e o botão editar inacessível
   if(tarefa.completa){
    li.classList.add('app__section-task-list-item-complete')
    botao.setAttribute('disabled', 'disabled')
   } else {
           //Ao clicar sobre a tarefa exibe aquela que esteja em andamento
        li.onclick = () => {
        document.querySelectorAll('.app__section-task-list-item-active').forEach(elemento =>{
        elemento.classList.remove('app__section-task-list-item-active')
         })
        if(tarefaSelecionada == tarefa){
        paragrafoDescricaoTarefa.textContent = ''
        tarefaSelecionada = null
        liTarefaSelecionada = null
        return
        }
         tarefaSelecionada = tarefa
         liTarefaSelecionada = li
            paragrafoDescricaoTarefa.textContent = tarefa.descricao 
            li.classList.add('app__section-task-list-item-active')
        }
   }
   return li
}

//Atualizar tarefas quando editar o nome delas
function atualizarTarefas () {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

//Cancelar inserção de tarefa
function cancelarTarefa () {
    textArea.value = '';
    formAdicionarTarefa.classList.add('hidden');
}


//***************************Eventos*******************************
btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
});

formAdicionarTarefa.addEventListener('submit', (evento) =>{
    evento.preventDefault(); //impede o evento padrão (que seria recarregar a página)
    //const descricaoTarefa = textArea.value;
    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
    atualizarTarefas()
    textArea.value = ''
    formAdicionarTarefa.classList.add('hidden')
});

//Para cada tarefa cadastrada chama a função que cria um elemento para a tarefa e insere o elemento no ul do código html da página
tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});

btnCancelar.addEventListener('click', () => {
    cancelarTarefa();
});


//Quando terminar a contagem gera um evento 'FocoFinalizado' e é executado essas operações: 
document.addEventListener('FocoFinalizado', () =>{
    if (tarefaSelecionada && liTarefaSelecionada){
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active')
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete')
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'disabled')
        tarefaSelecionada.completa = true
        atualizarTarefas()
    }
});

//Função dentro de uma constante: 
const removerTarefas = (somenteCompletas) =>{
    //IF utilizando operador ternário: 
    const seletor = somenteCompletas ? ".app__section-task-list-item-complete" : ".app__section-task-list-item"
    //IF utilizando padrão: 
    /*let seletor = '.app__section-task-list-item'
    if (somenteCompletas){
        seletor = ".app__section-task-list-item-complete"
    }*/
    
    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove()
    })
    tarefas = somenteCompletas ? tarefas.filter(tarefa => !tarefa.completa) : []
    atualizarTarefas()
}

btnRemoverConcluidas.onclick = () => removerTarefas(true)
btnRemoverTodas.onclick = () => removerTarefas(false)

