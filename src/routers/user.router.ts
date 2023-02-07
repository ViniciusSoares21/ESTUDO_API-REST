import { Router } from "express";
import UserController from "../controller/user.controller";

const controller = new UserController();

const userRouter = Router();

userRouter.get('/users', controller.getByUser);

export default userRouter;