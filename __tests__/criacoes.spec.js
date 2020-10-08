// const app = require('../src/app')

const { v4: uuidv4 } = require('uuid')
const request = require('supertest')


describe('Teste de uma requisição POST no Endpoint /criacao', () =>{

    it('deve-ser salvar novos valores de Criação no Banco de Dados e retornar status 200', async () => {
        const objectData = {
            id: uuidv4(),
            name: 'Luna Katrina',
            email: 'luna@katrina.com', 
            cpf: '464.886.220-13', 
            loanValue: 10000, 
            monthlyIncome: 2000,
            birthDate: new Date(1998,8, 22), 
            maritalStatus: 'Married', 
            address: 'Mr John Smith 132, My Street, Kingston, New York 12401 United States', 
        }
            const res = await request.post("/criacao").send(objectData)
            expect(res.statusCode).toBe(200)
    
    })

    it('não deve salvar uns valores de Criação no Banco de Dados e deve retornar status 406, pois um ou mais valores obrigatórios não foi preenchido', async () => {
        const objectData = {
            id: uuidv4(),
            name: 'Anitta Pituka',
            email: 'anitta@pituka.com',  
            loanValue: 10000, 
            monthlyIncome: 2000,
            birthDate: new Date(1998,8, 22), 
            maritalStatus: 'Married', 
            address: 'Mr John Smith 132, My Street, Kingston, New York 12401 United States', 
        }
            const res = await request.post("/criacao").send(objectData)
            expect(res.statusCode).toBe(406)
    
    })
})