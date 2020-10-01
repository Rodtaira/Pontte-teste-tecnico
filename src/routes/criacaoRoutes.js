const CriacaoController =   require('../controllers/CriacaoController')
const {Router}          =   require('express')

const router = Router()

router.post('/criacao', CriacaoController.createCriacao)

module.exports = router