export default class User{
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    //Getters
    //Função getter para pegar a informação privada #nome. Não aceita nenhum parâmetro. 
    get nome(){
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get nascimento(){
        return this.#nascimento
    }

    get role(){
        return this.#role
    }

    get ativo(){
        return this.#ativo
    }

    //Setters
    //Função setter aceita apenas 1 parâmetro relativo ao dado que será alterado usando o setter: 
    set nome(novoNome){
        if(novoNome === ''){
            throw new Error('Formato inválido.'); 
        }
        this.#nome = novoNome;
    }


    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email, 
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos(){
        //Linha de código para executar um método privado, podendo chamá-lo de módulos externos através do exibirInfos()
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`
    }
}

const novoUser = new User('Roger', 'rk@email.com', '1986-11-03');

/*
console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser)); 
*/ 


//OBS: o comando 'npm init -y' inicia um arquivo package json de configuração para se trabalhar com módulos no javascript