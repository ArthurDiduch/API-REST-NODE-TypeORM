import { getConnection } from "typeorm";
import createConnection from '../database';
import { CreateUserService } from "./CreateUserService";

describe('CreateUserService', () =>{
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios');
        await connection.close();
    })

    it('Deve retornar o id do usuário criado', async() =>{
        const createUserService = new CreateUserService();

        const result = await createUserService.execute({
            id: '5a00af16-228c-4548-b061-1daf5dad0bf1',
            nome: 'Alguem usuário',
            email: 'email@email.com'
        })

        console.log(result);
    })
})