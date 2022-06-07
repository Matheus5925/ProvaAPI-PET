import express, { json } from 'express';
import cors from 'cors';
import petController from './controller/petController.js'


const server = express();

server.use(cors());
server.use(express.json())

server.use(petController);

server.listen( process.env.PORT, () =>{
    console.log(`API rodando na porta ${process.env.PORT}`)
})