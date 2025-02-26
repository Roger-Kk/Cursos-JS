import api from "./api.js";

const ui = {

    async preencherFormulario(pensamentoId){
        const pensamento = await api.buscarPensamentosPorId(pensamentoId);
        document.getElementById("pensamento-id").value = pensamento.id
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo
        document.getElementById("pensamento-autoria").value = pensamento.autoria
    },

    limparFormulario(){
        document.getElementById("pensamento-form").reset();
    },

    async renderizarPensamentos(){
        const listaPensamentos = document.getElementById("lista-pensamentos");

        try{
            const pensamentos = await api.buscarPensamentos();
            // Código antes da substituição pela função de adicionarPensamentoNaLista()
            // pensamentos.forEach(pensamento => {
            //     listaPensamentos.innerHTML += `
            //     <li class="li-pensamento" data-id="${pensamento.id}">
            //         <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
            //         <div class="pensamento-conteudo">${pensamento.conteudo}</div>
            //         <div class="pensamento-autoria">${pensamento.autoria}</div>
            //     </li>`
            // });
            pensamentos.forEach(ui.adicionarPensamentoNaLista);
        } catch(error){
            console.log("Erro ao carregar dados de pensamentos da API.");
            throw error;
        }
    },

    adicionarPensamentoNaLista(pensamento){
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id);
        li.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "assets/imagens/aspas-azuis.png";
        iconeAspas.alt = "Aspas azuis";
        iconeAspas.classList.add("icone-aspas");

        const pensamentoConteudo = document.createElement("div");
        pensamentoConteudo.textContent = pensamento.conteudo;
        pensamentoConteudo.classList.add("pensamento-conteudo");

        const pensamentoAutoria = document.createElement("div");
        pensamentoAutoria.textContent = pensamento.autoria;
        pensamentoAutoria.classList.add("pensamento-autoria");

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id);

        const iconeEditar = document.createElement("img");
        iconeEditar.src = "assets/imagens/icone-editar.png";
        iconeEditar.alt = "Editar";
        botaoEditar.appendChild(iconeEditar);

        const icones = document.createElement("div");
        icones.classList.add("icones");
        icones.appendChild(botaoEditar);

        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        li.appendChild(icones);

        listaPensamentos.appendChild(li);
    }
}

export default ui; 