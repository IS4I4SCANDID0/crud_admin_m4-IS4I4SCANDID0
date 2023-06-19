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
coursesRoutes.post("/:courseId/users/:userId", verifyToken, addUserInCourseController);
coursesRoutes.get("", verifyToken, readAllCoursesController);
coursesRoutes.get("/:id/users", verifyToken, verifyUserPermission, verifyCourseId,listCoursesAndUsersController);
coursesRoutes.delete("/:courseId/users/:userId", verifyToken, verifyUserPermission, unbindUserController);

export default coursesRoutes;