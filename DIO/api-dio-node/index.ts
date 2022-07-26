import express, {Request, Response} from 'express';

const server = express();

server.get('/', (Request:Request, response:Response) => {
    return response.json({mensagem: 'Bem vindo a nossa DIO API'});
});

server.listen(5000, () =>{
    console.log('Servidor on na porta 5000 http://localhost:5000/');
});