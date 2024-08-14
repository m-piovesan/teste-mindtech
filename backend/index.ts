import express from "express";
import cors from "cors";
import { userRouter } from "./src/http";

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter)

app.listen(3000, () => console.log("Server is running on port 3000"));
