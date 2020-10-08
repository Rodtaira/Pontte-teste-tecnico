const database          =   require('../models')
const { v4: uuidv4 }    =   require('uuid')
const {Machine} = require('xstate')

// Variaveis globais para fazer a transição de estados 

let currentState = null
let nextState = null 

// Máquina de estados para fazer a transição de estados de forma correta, no qual deve-ser terminar um estado antes de prosseguir para o próximo estado. 

const stateMachine = Machine({
    id: 'estados',
    initial: 'criacao',
    states: {
      criacao: {
        on: {
          TIMER: 'upload'
        }
      },
      upload: {
        on: {
          TIMER: 'status'
        }
      },
      status: {
      }
    }
  })

class EstadoController{

  /**
   * Método para criar um novo valor de Criação com alguns valores que devem ser preenchidos de forma obrigatória, como Nome, Email, CPF e Valor do Empréstimo
   * @param {any} req 
   * @param {any} res 
   */

    static async createCriacao(req, res){
    
        const birthDate = new Date(req.body.birthDate)

        try {
            // Estado Inicial 
            currentState = 'criacao'

            if(!req.body.name || !req.body.email || !req.body.cpf || !req.body.loanValue){
              return res.status(406).json({message: "Existem campos obrigatórios que devem ser preenchidos"})
            }
 
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
                  // Atribui o valor para o próximo estado
                    nextState = stateMachine.transition(currentState, 'TIMER').value
                    return res.status(200).json(newCriacao)
                })
            
        } catch (error) {
            return res.status(500).json(error)
        }
    }
/**
 * Método para atualizar um valor específico de Criação e checa se o Status de Aprovação está ainda reprovado para poder prosseguir com a atualização e caso o contrato já esteja aprovado, não permitirá atualizar mais.   
 * @param {any} req 
 * @param {any} res 
 */

    static async updateCriacao(req, res){

      const { criacaoID, aprovacaoID } = req.params

      const aprovacao = await database.Aprovacoes.findOne( { where: { id: aprovacaoID } } )
      
      // Checa o status de aprovação do contrato
      if(aprovacao.status){
        return res.status(403).json({message: "Contrato já aprovado, você não pode mais alterar os dados"})
      }

      // Tenta atualizar algum valor qualquer de alguma Criação. 
      try {
        await database.Criacoes.update(req.body, { where: { id: criacaoID } } )
        const updatedCriacao = await database.Criacoes.findOne( { where: { id: criacaoID } } ) 
        return res.status(200).json(updatedCriacao)
      } catch (error) {
          return res.status(500).json(error.message)
      }
    }

    /**
     * Método para fazer o upload de Imagens, sendo a imagem do Documento obrigatória e não deixa fazer o Upload sem que antes tenha terminado o estado de Criação. 
     * @param {any} req 
     * @param {any} res 
     */
   static async uploadImages(req, res){
    
    currentState = nextState

    try{

      if( currentState != "upload" ){
        return res.status(412).json({message: "Deve-se terminar uma etapa anterior "})
      }

      if (!req.files) {
        return res.status(406).json({message: "Não há imagens para fazer o Upload"})
      } else {

          const documentImage = req.files.documento 
          const comprovanteImage = req.files.comprovante
          const imovelImage = req.files.imovel
          const criacaoID   = req.body.criacaoID

          if(!req.files.documento){
              res.status(406).json({message: "Imagem do Documento é obrigatório"})
          }

          if (documentImage.mimetype == "image/jpeg"  || documentImage.mimetype == "image/png"){
                      
                  const documentName = documentImage.name
                  const comprovanteName = comprovanteImage.name
                  const imovelName = imovelImage.name

                  const id = uuidv4()
                  const documento = 'http://127.0.0.1:3000/images/' + id + documentName
                  const comprovante = 'http://127.0.0.1:3000/images/' + id + comprovanteName
                  const imovel = 'http://127.0.0.1:3000/images/' + id + imovelName

                  await database.UploadImages.create({
                      id: id, 
                      documentoImage: documento, 
                      comprovanteRendaImage: comprovante,
                      imovelImage: imovel,
                      CriacoesID: criacaoID
                  })
                  .then((newImages) => { 
                      nextState = stateMachine.transition(currentState, 'TIMER').value;
                      documentImage.mv('public/images/' + '-' + id + documentName)
                      comprovanteImage.mv('public/images/' + '-' + id + comprovanteName)
                      imovelImage.mv('public/images/' + '-' + id + imovelName)
                      return res.status(200).json(newImages)
                  })
              }
      }

      }catch(error){
          return res.status(500).json(error)
      }
    }

    /**
     * Método para criar uma Aprovação que tem um valor obrigatório de Status e só pode criar um novo valor caso tenha feito todos os estados anteriores. 
     * @param {any} req 
     * @param {any} res 
     */
    static async createAprovacao(req, res){

        currentState = nextState

        if(currentState == null || currentState != "status"){
          return res.status(412).json({message: "Deve-se terminar uma etapa anterior "})
        }
        
        try{
          
          const id          = uuidv4()
          const status      = req.body.status
          const criacaoID   = req.body.criacaoID

          await database.Aprovacoes.create({
            id: id, 
            status: status,
            CriacoesID:criacaoID
          }).then((newStatus) => {
            nextState = stateMachine.transition(currentState, 'TIMER').value
            nextState = null 
            currentState = null
            return res.status(200).json(newStatus)
          })

        }catch(error){
          return res.status(500).json(error.message)
        }
      }

      /**
       * Método para atualizar os valores de Aprovação de Contrato. 
       * @param {any} req 
       * @param {any} res 
       */
      static async updateAprovacao(req, res){

        const {aprovacaoID} = req.params
        
        try {
          await database.Aprovacoes.update(req.body, { where: { id: aprovacaoID } } )
          const updatedAprovacao = await database.Aprovacoes.findOne( { where: { id: aprovacaoID } } ) 
          return res.status(200).json(updatedAprovacao)
        } catch (error) {
            return res.status(500).json(error.message)
        }
      }
}

module.exports = EstadoController