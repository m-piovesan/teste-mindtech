import { Router } from "express";
import { UserController } from "../controllers";
import { UserRepository } from "../../database";

const userRouter = Router();

const userRepository = new UserRepository();
const userController = new UserController(userRepository)

userRouter.post("/user", userController.create);

export { userRouter };