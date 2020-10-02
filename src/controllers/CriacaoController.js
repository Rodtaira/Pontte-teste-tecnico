const   database        =   require('../models')
const { v4: uuidv4 }    =   require('uuid');

class CriacaoController{
    static async createCriacao(req, res){
        const birthDate = new Date(req.body.birthDate)

        try {
            req.state = [false, false, false]
            await database.Criacoes.create({
                id: uuidv4(), 
                name: req.body.name, 
                email: req.body.email,
                cpf: req.body.cpf, 
                loanValue: req.body.loanValue, 
                monthlyIncome: req.body.monthlyIncome, 
                birthDate: birthDate, 
                maritalStatus: req.body.maritalStatus, 
                address: req.body.address
            })
                .then((newCriacao) => {
                    req.state[0] = true 
                    console.log(req.state)
                    return res.status(200).json(newCriacao)
                })
                .catch((error) => {
                    return res.status(406).json(error.errors)
                })
            
        } catch (error) {
            console.log(error)
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CriacaoController