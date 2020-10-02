const bodyParser    =   require('body-parser')
const criacaoRoutes =   require('./criacaoRoutes')
const cors          =   require('cors')

module.exports = app => {

    app.use(bodyParser.json())
    app.use(cors())
    app.use(criacaoRoutes)


    app.get('/', (req, res) => {
        res.send('Olá')
    })

    app.get('/jorge', (req, res) => {
        res.send('Olá')
    })
}