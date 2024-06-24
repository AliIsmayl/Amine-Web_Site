import express from 'express'
import { Login, Register } from '../controllers/login.js';

const LoginRouter=express.Router()

LoginRouter.post("/login", Login);
LoginRouter.post("/register", Register);

export default LoginRouter;