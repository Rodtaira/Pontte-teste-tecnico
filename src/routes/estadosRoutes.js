const EstadosController =   require('../controllers/EstadosController')
const {Router}          =   require('express')

const router = Router()

// POST requests

router.post('/criacao', EstadosController.createCriacao)
router.post('/upload', EstadosController.uploadImages)
router.post('/status', EstadosController.createAprovacao)

// PUT requests

router.put('/updateCriacao/:criacaoID/:aprovacaoID', EstadosController.updateCriacao)
router.put('/updateAprovacao/:aprovacaoID', EstadosController.updateAprovacao)
// router.put('/updateImages/:uploadedImagesID/:statusID', EstadosController.updateImages)

module.exports = router