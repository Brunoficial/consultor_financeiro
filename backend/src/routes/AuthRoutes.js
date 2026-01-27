import dbConnection from "../../config/db.js";
import express from 'express'
import AuthService from "../services/AuthService.js";

const router = express.Router();

const authService = new AuthService(dbConnection); 

router.post('/login', async(req, res) => authService.login(req, res))
router.post('/register', async(req, res) => authService.register(req, res))

export default router 