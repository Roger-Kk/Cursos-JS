//Variáveis
const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const btnCancelar = document.querySelector('.app__form-footer__button--cancel')
//const tarefas = [] esse const é substituído pela linha abaixo para pegar as tarefas salvas em localstorage
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
//o "ou array vazio: || []" serve para caso não haja tarefas cadastradas a const tarefas vai receber um array vazio



//Eventos
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
})



//Funções
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
        debugger
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






