import { Router } from "express";
import UserController from "../controller/user.controller";

const controller = new UserController();

const userRouter = Router();

userRouter.get('/users', controller.getByUser);

userRouter.post('/users', controller.createUser);

userRouter.patch('/users/:id', controller.updateEmail);

userRouter.delete('/users/:id', controller.deletUser);


export default userRouter;