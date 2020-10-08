const express               =   require('express')
const bodyParser            =   require('body-parser')
const fileUpload            =   require('express-fileupload')	
const estadosRoutes         =   require('./estadosRoutes')

const dbHandleError         =   require('../middlewares/dbHandleError')

module.exports = app => {

    app.use(express.static("./public"))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
     }))
    app.use(fileUpload())
    app.use(dbHandleError)
    app.use(estadosRoutes)
    // app.use(criacaoRoutes)
    // app.use(uploadImagesRoutes)

}