const express=require('express')
const { loginController, registerController } = require('../controllers/userController')
//router object

const router=express.Router()
//router
//post||Login
router.post('/login',loginController)

//post||register user
router.post('/register',registerController)

module.exports=router