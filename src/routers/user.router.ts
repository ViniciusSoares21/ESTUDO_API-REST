import { Router } from "express";
import ValidateUser from "../middlewares/validateUser";
import UserController from "../controller/user.controller";

const controller = new UserController();
const validate = new ValidateUser();

const userRouter = Router();

userRouter.get('/users', controller.getByUser);

userRouter.post('/users', validate.createUserValidation, controller.createUser);

userRouter.patch('/users/:id', validate.updateUserValidation, controller.updateEmail);

userRouter.delete('/users/:id', controller.deletUser);


export default userRouter;