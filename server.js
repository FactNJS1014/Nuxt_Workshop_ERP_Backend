const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

const userController = require("./controllers/UserController")
const productType = require("./controllers/ProductType")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//
//Users
//
app.post('/api/user/signIn', userController.signIn)

//productType
app.post('/api/productType/create', productType.create)

app.listen(3001, '0.0.0.0' , () =>{
    console.log("Server running on port 3001")
})