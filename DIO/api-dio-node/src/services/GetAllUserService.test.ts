import createConnection from "../database";
import { getConnection } from 'typeorm';
import { GetAllUserService } from './GetAllUserService';
import { CreateUserService } from './CreateUserService';
import { v4 as uuid } from 'uuid';

describe('GetAllUserService', () =>{
    beforeAll(async () =>{
        const connection = createConnection();
        await (await connection).runMigrations;
    })

    afterAll(async () =>{
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios');
        await connection.close();
    })

    

    it('Deve retornar todos os usuários cadastrados', async()=>{
        const createUserService = new CreateUserService();

        await createUserService.execute({
            id: uuid(),
            nome: 'Algum usuario',
            email: 'algumusuario@gmail.com',
        })

        await createUserService.execute({
            id: uuid(),
            nome: 'Outro usuario',
            email: '',
        })
        
        const expectedResponse = [
            {
                nome: 'Algum usuario',
                email: 'algumusuario@gmail.com',
            },
            {
                nome: 'Outro usuario',
                email: '',
            }
        ]

        const getAllUserService = new GetAllUserService();

        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectedResponse);
    })
})