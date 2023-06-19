import { Router } from "express";
import { validateBody } from "../middlewares/validateBodyRequest";
import { courseCreate } from "../schemas/courses.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyUserPermission } from "../middlewares/userPermission.middlewares";
import { addUserInCourseController, createCourseController, listCoursesAndUsersController, readAllCoursesController, unbindUserController } from "../controllers/courses.controllers";
import { verifyCourseId } from "../middlewares/verifyCourseIdParams.middleware";
import { verifyUserId } from "../middlewares/verifyUserIdParams.middleware";

const coursesRoutes: Router = Router();

coursesRoutes.post("", validateBody(courseCreate), verifyToken, verifyUserPermission, createCourseController);
coursesRoutes.post("/:courseId/users/:userId", verifyToken, verifyUserPermission, verifyCourseId, verifyUserId, addUserInCourseController);
coursesRoutes.get("", verifyToken, verifyUserPermission, readAllCoursesController);
coursesRoutes.get("/:courseId/users", verifyToken, verifyUserPermission, verifyCourseId, listCoursesAndUsersController);
coursesRoutes.delete("/:courseId/users/:userId", verifyToken, verifyUserPermission, verifyCourseId, verifyUserId, unbindUserController);

export default coursesRoutes;