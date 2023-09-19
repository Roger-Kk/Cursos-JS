import User from "./User.js";

 export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    nomeAdmin(){
        return `${this.nome}`
    }

    //Polimorfismo. Quando usa o mesmo nome de uma função já herdada de outra classe porém muda seu comportamento. Antes exibiria todos os dados. Agora só nome, role e ativo. 
    exibirInfos(){
        return `${this.nome}, ${this.role}, ${this.ativo}`
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '1980-01-01');

/*
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('JS', 20)); 
*/