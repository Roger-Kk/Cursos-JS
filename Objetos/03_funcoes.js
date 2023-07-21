const cliente = {
    nome: "João", 
    idade: 24, 
    email: 'Joao@dominio.com', 
    telefone: ['41 11112222', '41 33334444'],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log("Saldo Insuficiente");
        } else{
            this.saldo -= valor;
            console.log(`Pagamento Realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(250);