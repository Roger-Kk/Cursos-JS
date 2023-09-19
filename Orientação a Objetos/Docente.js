import User from './User.js';

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo =true){
        super(nome, email, nascimento, role, ativo)
    }
    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso}. `
    }
}

const novoDocente = new Docente('Mari', "m@m.com", '2020-01-02');

/*
console.log(novoDocente);
console.log(novoDocente.exibirInfos()); 
console.log(novoDocente.aprovaEstudante('Juliana', 'JS')); 
*/