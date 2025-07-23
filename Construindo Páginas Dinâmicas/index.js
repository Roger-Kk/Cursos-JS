
//Selecionar um elemento
const inputItem = document.getElementById("input-item"); 
const botaoSelecionar = document.getElementById("adicionar-item");

//Ouvir um elemento
botaoSelecionar.addEventListener("click", (evento)=>{
    evento.preventDefault(); //previne que a página seja carregada
    
    //Se for aviso exibe mensagem de alerta e sai da função
    if(inputItem.value === ""){
        alert("Por favor, insira um item.");
        return;
    }
    //Contruir um elemento na lista
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
})