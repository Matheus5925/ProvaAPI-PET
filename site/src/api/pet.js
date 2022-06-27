import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:5000"
})


export async function CadastrarOsPets(nome) {
    const resposta = await api.post(`/pet/nome?nome=${nome}`)
    return resposta.data;
}


export async function ConsultarPets(){
    const resposta = await api.get('/pet')
    return resposta.data;
}