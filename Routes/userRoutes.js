import { Router } from "express";
import {challange  , register , logout} from '../controllers/userController.js';
import { WeatherFetch, leetcode } from "../apiController/apicontroller.js";

const Userrouter = Router();
// Userrouter.post('/login', login);
Userrouter.post('/register', register);
Userrouter.get('/challange', challange);
Userrouter.post('/leetcode', leetcode);
Userrouter.post('/logout', logout);
Userrouter.post('/weather', WeatherFetch);


export default Userrouter;