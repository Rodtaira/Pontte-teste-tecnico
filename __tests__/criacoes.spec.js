const app = require('../src/app')
const supertest = require('supertest')
const { v4: uuidv4 } = require('uuid');
const request = supertest(app) 


describe('Test of the POST request /criacao', () =>{
    it('should save a new record and return a 200 status', async () => {

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

    it('should not save a new record and return a 406 status, because one or more required field is empty', async () => {

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