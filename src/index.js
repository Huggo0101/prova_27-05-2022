import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import endpoints from './endpoints.js'


const server = express();
server.use(express.json());
server.use(cors());
server.use(endpoints)

server.listen(process.env.PORT, ()=>{console.log("rodando")})

