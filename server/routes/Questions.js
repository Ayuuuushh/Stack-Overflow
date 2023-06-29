import Express from "express";

import { AskQuestion ,getAllQuestions, deleteQuestion, voteQuestion} from "../controllers/Questions.js";
import auth from "../middlewares/auth.js";

const Router = Express.Router();
Router.post("/Ask",auth,AskQuestion);
Router.get("/get",getAllQuestions);
Router.delete('/delete/:id',auth, deleteQuestion)
Router.patch('/vote/:id', auth,voteQuestion)


export default Router;
