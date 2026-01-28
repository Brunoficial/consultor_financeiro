import dbConnection from "../../config/db.js";
import express from 'express'
import TransactionService from "../services/TransactionService.js";

const router = express.Router();

const transactionService = new TransactionService(dbConnection);

router.get('/list', async(req, res) => transactionService.getAllUserTransactions(req, res))
router.post('/create', async(req, res) => transactionService.createTransaction(req, res))
router.put('/update/:Id', async(req, res) => transactionService.editTransaction(req, res))
router.delete('/delete/:Id', async(req, res) => transactionService.deleteTransaction(req, res))

export default router 