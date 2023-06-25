import { Router } from "express";
import {challange  , register} from '../controllers/userController.js';

const Userrouter = Router();
// Userrouter.post('/login', login);
Userrouter.post('/register', register);
Userrouter.get('/challange', challange);

export default Userrouter;