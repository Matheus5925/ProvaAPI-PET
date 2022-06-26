import { con } from './connection.js'

export async function CadastarPET(nome, petId) {
    const comando = `
        insert into tb_pet (nm_pet)
                values (?)`

    const [ linhas ] = await (await con).query(comando, [ nome ])
    petId = linhas.insertId;
    return linhas;
}

export async function consultarPET() {
    const comando = `select * from tb_pet`

    const [resposta] = await (await con).query(comando)
    return resposta;
}