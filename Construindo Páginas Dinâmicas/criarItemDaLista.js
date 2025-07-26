import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item"); 
let contador = 0;

export function criarItemDaLista(){
    
    //Se for aviso exibe mensagem de alerta e sai da função
    if(inputItem.value === ""){
        alert("Por favor, insira um item.");
        return;
    }

    //Contruir um elemento na lista seguindo o padrão html no index.html: 
    /*
    <li>
        <div class="lista-item-container">
            <input type="checkbox" id="checkbox-1" />
            <p>Ração de gato</p>
        </div>
        <p class="texto-data">Segunda-feira (31/10/2022) às 08:30</p>
    </li>
    */ 
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function (){
        if (inputCheckbox.checked){
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    })

    //Após criado, deve-se associar o elemento ao DOM
    //da hierarquia menor para a maior, formando a árvore de elementos
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();

    //Criando elemento para incluir a data
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}