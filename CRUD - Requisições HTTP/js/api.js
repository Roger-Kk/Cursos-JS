//Atribuindo a URL base numa variável: 
const URL_BASE = "http://localhost:3000";

//Utilização do Axios para fazer requisições Http (outra forma ao invés do fetch):
const api = {
    async buscarPensamentos(){
        try {
            const response = await axios(`${URL_BASE}/pensamentos`);
            return await response.data;
            
        } catch (error) {
            alert("Erro ao buscar pensamentos");
            throw error;
        }
    },

//arquivo que fará a requisição para a API
/*const api = {
    async buscarPensamentos(){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`);
            return await response.json();
            
        } catch (error) {
            alert("Erro ao buscar pensamentos");
            throw error;
        }
    },
*/
//Requisição com Axios:
async salvarPensamentos(pensamento){
    try {
        const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento)
        return await response.data;
        
    } catch (error) {
        alert("Erro ao salvar pensamentos");
        throw error;
    }
},

/*
    async salvarPensamentos(pensamento){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json();
            
        } catch (error) {
            alert("Erro ao salvar pensamentos");
            throw error;
        }
    },
*/
    async buscarPensamentosPorId(id){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`);
            return await response.json();
            
        } catch (error) {
            alert("Erro ao buscar pensamento");
            throw error;
        }
    },

    async editarPensamento(pensamento){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json();
            
        } catch (error) {
            alert("Erro ao editar pensamento");
            throw error;
        }
    },

    async excluirPensamento(id){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
                method: "DELETE", 
            })
            
        } catch (error) {
            alert("Erro ao excluir um pensamento");
            throw error;
        }
    },
    
};

export default api; 