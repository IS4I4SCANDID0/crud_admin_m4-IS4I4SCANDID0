import { Router } from "express";
import { listUsersController, registerUserController } from "../controllers/users.controllers";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";
import { validateBody } from "../middlewares/validateBodyRequest";
import { userCreate } from "../schemas/user.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyUserPermission } from "../middlewares/userPermission.middlewares";

const userRouters: Router = Router();

userRouters.post("", validateBody(userCreate),verifyEmail, registerUserController)
userRouters.get("", verifyToken, verifyUserPermission, listUsersController)

export default userRouters;