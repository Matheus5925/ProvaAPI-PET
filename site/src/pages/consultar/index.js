import { useEffect, useState } from "react"
import { ConsultarPets } from "../../api/pet"


export default function Consultar() {
    const [pets, setPets] = useState([])

    async function Consultar() {
        const resp = await ConsultarPets();
        setPets(resp)
    }


    useEffect(() => {
        Consultar()
    }, [])

    return(
        <main>
            <h1>Consultar PETs</h1>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}