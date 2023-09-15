
/*Estrutura de Objeto: 
var nomeVar = {
    atributo: "",
    atributo2: "",
    nomeFunção(){

    },
    ------- OU -------
    nomeFunção: function(){

    },
}*/
const user = {
    nome: "Roger",
    email: "rk@email.com",
    nascimento: "1986/11/03",
    role: "dev",
    ativo: true,   
    exemploFuncao(){
        console.log('Exemplo função.'); 
    }, 
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}
//*** This é um termo do javascript que se refere ao objeto ou ao contexto a qual um atributo está ligado. Por exemplo, se executarmos
console.log('Chamando função do objeto: ');
user.exibirInfos()
// o resultado será o valor dos atributos nome e email ligado ao objeto user.

// Agora, se criarmos uma função e usar o this.atributo sem contexto, ao chamar a função será retornará undefined.
const exibir = function(){
    console.log(this.nome)
}
console.log('Executando função sem contexto para o this: ');
exibir()

//Porém podemos usar o método bind() do javascript para ligar a função exibir ao objeto user, dando agora um contexto para ele. 
const exibirNome = exibir.bind(user);
console.log('Método bind(): ');
exibirNome()

//Além do bind(), podemos usar o método call() em uma função que recebe como parâmetro o contexto que será atribuído ao this: 
console.log('Método call(): ');
exibir.call(user)

const admin ={
    nome: "Administrador",
    email: "admin@email.com",
    role: "admin",
    criarCurso (){
        console.log('Curso criado!');
    },
}

//Construtor de objeto, herdando propriedades de outro objeto: tem dois parâmetros setPrototypeOf(objeto que herda, objeto que cede):
Object.setPrototypeOf(admin, user);
console.log('Herdando propriedades: ')
admin.criarCurso();
admin.exibirInfos(); 

