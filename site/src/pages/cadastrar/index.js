import { useState } from "react"
import {  CadastrarOsPets } from '../../api/pet.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cadastrar() {
    const [nome, setNome] = useState('')
    const [id, setId] = useState(0)

     async function NovoPet() {
         try {
            const resposta = await CadastrarOsPets(nome)
            setId(resposta.id)

            toast.success('Cadastro feito com sucesso')

         } catch (err) {
            toast(err.response.data)
         }
        
    }

    return(
        <main>
            <ToastContainer/>
            <h1>Cadastar PETs</h1>
            <div>
                <label>Nome: </label>
                <input type='text' placeholder="Digite o nome do pet" value={nome} onChange={e => {setNome(e.target.value)}}></input>
            </div>
            <br/>
            <div>
                <button onClick={NovoPet}>Cadastar</button>
            </div>

        </main>
    )
}