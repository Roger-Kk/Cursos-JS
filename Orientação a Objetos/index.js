import User from "./User.js"; 
import Docente from "./Docente.js"; 
import Admin from "./Admin.js"; 

const novoUser = new User('Rogerzão', 'RK@gmail.com', "1986-11-03"); 
console.log(novoUser.exibirInfos()); 

/*Porém é possível mudar uma propriedade da classe
novoUser.#nome = 'Márcia';
console.log(novoUser.exibirInfos()); 

//Para evitar isso, usa-se a # para classificar uma propriedade como privada > lá no arquivo User.js altera-se nome para #nome. 
*/

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2000-01-01');
console.log(novoAdmin.exibirInfos()); 
console.log(novoAdmin.nomeAdmin()); 

//O getter é chamado como se fosse uma propriedade. Sem "()"
console.log(novoAdmin.nome); 

//Após a propriedade ter sido definida como privada, não é mais possível alterá-la a partir do código: 
/*
novoAdmin.nome = "oisjfoisjflksj";
console.log(novoAdmin.nome); 
*/

//Após a definição do setter para alterar a propriedade #nome em User
novoAdmin.nome = "Alterando #nome com Setter";
console.log(novoAdmin.nome); 

//Implementado em User o método trow no setter para evitar setar um nome vazio: 
/*
novoAdmin.nome = ''; 
console.log(novoAdmin.nome); 
*/

const novoDocente = new Docente('Guilherme', 'g@g.com', '1990-10-15');
console.log(novoDocente.exibirInfos()); 
