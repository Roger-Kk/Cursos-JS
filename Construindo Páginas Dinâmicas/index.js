import { criarItemDaLista } from "./criarItemDaLista.js";
import  verificarListaVazia from "./verificarListaVazia.js";

//Selecionar um elemento
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoSelecionar = document.getElementById("adicionar-item");

//Ouvir um elemento
botaoSelecionar.addEventListener("click", (evento)=>{
    evento.preventDefault(); //previne que a página seja carregada
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
})

verificarListaVazia(listaDeCompras);