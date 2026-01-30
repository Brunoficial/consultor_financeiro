import dbConnection from "../config/db.js";
import express from 'express'
import UserController from "../controllers/UserController.js";

const userRouter = express.Router();

const userController = new UserController(dbConnection);

userRouter.post('/login', (req, res) => userController.login(req, res))
userRouter.post('/register', (req, res) => userController.register(req, res))
userRouter.post('/findById/:id', (req, res) => userController.findById(req, res))

export default userRouter 