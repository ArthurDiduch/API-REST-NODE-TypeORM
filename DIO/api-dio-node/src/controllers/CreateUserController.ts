import { request, Request, Response} from 'express';

class CreateUserController{
    handle(Request:Request, response:Response) {
        
        const nome = Request.body.nome;

        return response.json({mensagem:`Usuário ${nome} criado`});
    }
};

export { CreateUserController }