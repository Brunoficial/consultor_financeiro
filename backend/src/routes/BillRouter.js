import dbConnection from "../config/db.js"
import express from 'express'
import BillController from "../controllers/BillController.js";

const billRouter = express.Router();

const billController = new BillController(dbConnection);

billRouter.get('/listByUserId/:id', async(req, res) => billController.getAllUserBills(req, res))
billRouter.get('/getById/:id', async(req, res) => billController.getById(req, res))
billRouter.post('/create', async(req, res) => billController.createBill(req, res))
billRouter.put('/update/:id', async(req, res) => billController.editBill(req, res))
billRouter.delete('/delete/:id', async(req, res) => billController.deleteBill(req, res))

export default billRouter