import express from "express";
import { login , signup} from '../controllers/auth.js'
import {getAllUsers, updateProfile} from '../controllers/Users.js'
import auth from '../middlewares/auth.js'

const Router = express.Router();

Router.post('/signup',signup)
Router.post('/login',login)

Router.get('/getAllUsers', getAllUsers)
Router.patch('/update/:id', auth, updateProfile)


export default Router;