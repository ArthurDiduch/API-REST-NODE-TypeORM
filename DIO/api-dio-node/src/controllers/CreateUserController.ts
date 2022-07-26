import {Request, Response} from 'express';
import { v4 as uuid } from 'uuid';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController{
    async handle(Request:Request, response:Response) {

        const createUserService = new CreateUserService();
        
        const nome = Request.body.nome;
        const email = Request.body.email;
        const id = uuid();

        if(nome.length === 0){
            return response.status(400).json({mensagem: 'Nome obrigatorio'});
        }

        const user = await createUserService.execute({id, nome, email});

        return response.status(201).json(user);
    }
};

export { CreateUserController }