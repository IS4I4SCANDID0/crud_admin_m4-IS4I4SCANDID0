import { Router } from "express";
import { listUsersController, readUsersLinkedCoursesController, registerUserController } from "../controllers/users.controllers";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";
import { validateBody } from "../middlewares/validateBodyRequest";
import { userCreate } from "../schemas/user.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyUserPermission } from "../middlewares/userPermission.middlewares";
import { verifyUserId } from "../middlewares/verifyUserIdParams.middleware";
import { verifyCourseId } from "../middlewares/verifyCourseIdParams.middleware";

const userRouters: Router = Router();

userRouters.post("", validateBody(userCreate), verifyEmail, registerUserController)
userRouters.get("", verifyToken, verifyUserPermission, listUsersController)
userRouters.get("/:id/courses", verifyToken, verifyUserPermission, readUsersLinkedCoursesController)

export default userRouters;