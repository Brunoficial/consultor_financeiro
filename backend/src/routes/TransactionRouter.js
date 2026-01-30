import dbConnection from "../config/db.js"
import express from 'express'
import TransactionController from "../controllers/TransactionController.js";

const transactionRouter = express.Router();

const transactionController = new TransactionController(dbConnection);

transactionRouter.get('/listByUserId/:id', async(req, res) => transactionController.getAllUserTransactions(req, res))
transactionRouter.post('/create', async(req, res) => transactionController.createTransaction(req, res))
transactionRouter.put('/update/:id', async(req, res) => transactionController.editTransaction(req, res))
transactionRouter.delete('/delete/:id', async(req, res) => transactionController.deleteTransaction(req, res))

export default transactionRouter 