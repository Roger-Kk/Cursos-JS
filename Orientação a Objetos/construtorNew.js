//Construtor de objeto new: 

//Quando se trabalha com classes usa-se letra maiúscula como boa prática: 
function User(nome, email){
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`;
    }
}
//Instanciando um objeto com new: 
const novoUser = new User('Roger', 'rk@email.com');
console.log(novoUser.exibirInfos());

//Usando Object.create()
//Instanciando um protótipo ao objeto à partir de outro protótipo:  
function Admin(role){
    User.call(this, 'Roger', 'rk@email.com');
    this.role = role || 'Estudante'
}

Admin.prototype = Object.create(User.prototype);
const novoUser2 = new Admin('admin');
console.log(novoUser2.exibirInfos());
console.log(novoUser2.role); 

//Instanciando um prototipo a um objeto à partir de outro objeto: 
const user = {
    exibirInfos: function(nome){
        return nome;
    }
}
const novoUser3 = Object.create(user);
console.log(novoUser3.exibirInfos("Rafaella")); 
console.log(user.isPrototypeOf(novoUser3)); 
