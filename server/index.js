import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRoutes from "./routes/users.js";
import QuestionRoutes from './routes/Questions.js';   
import answerRoutes from './routes/Answer.js';   

const app = express();

dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/user", userRoutes);
app.use("/questions", QuestionRoutes);
app.use("/answer",answerRoutes);
app.get("/", (req, res) => {
  res.send("This is a stack Overflow clone API");
});
const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL
   
mongoose
  .connect(DATABASE_URL, { UsenewURLParser: true, UseUnifiedTopology: true })
  .then(
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
  });
