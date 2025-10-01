
//Requisição para API de conteúdo presente em requisicao.txt
let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();


//Função pra fazer a requisição
async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    //console.log(livros);
    //console.table(livros);
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
    
}
