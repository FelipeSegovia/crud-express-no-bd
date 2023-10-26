import { Router} from "express";
import {UserController} from "../controllers/user.controller";
import {UserUseCase} from "../../application/userUseCase";
import {UserRepositoryImpl} from "../database/repositories/user.repository";

const router: Router = Router();

const userRepository = new UserRepositoryImpl();

const userUseCase = new UserUseCase(userRepository)

const userController = new UserController(userUseCase);

router.get('/users', userController.showAll)

export default router;