const express=require('express')

const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require('../controllers/transactionController')
//router object

const router=express.Router()
router.post('/addtransaction',addTransaction)
router.post('/getalltransaction',getAllTransaction)
router.post('/edittransaction',editTransaction)
router.post('/deletetransaction',deleteTransaction)

module.exports=router