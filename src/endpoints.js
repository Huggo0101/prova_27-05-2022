import { Router } from 'express';
import { diaSemana, semaforo } from './services.js';


const server = Router()

server.get('/semaforo/:cor', (req,resp) => {
    let cor = req.params.cor
    let resposta = semaforo(cor)
    resp.send({
        x: resposta
    })
})

server.get('/diaSemana', (req,resp) => {
    let numero = req.query.numero
    let resposta = diaSemana(numero)
    resp.send({
        x: resposta
    })
})
export default server