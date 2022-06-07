import { Router } from "express";
import { CadastarPET, consultarPET} from '../repository/petRepository.js'

const server = Router();

server.post('/pet/nome', async (req, resp) =>{
    try {
        const { nome } = req.query;

        const resposta = await CadastarPET(nome);
        resp.send(resposta)
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/pet', async (req, resp) =>{
    try {
        const res = await consultarPET();
        resp.send(res);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    } 
})

export default server;