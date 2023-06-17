import { Router } from "express";
import { validateBody } from "../middlewares/validateBodyRequest";
import { courseCreate } from "../schemas/courses.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyUserPermission } from "../middlewares/userPermission.middlewares";
import { createCourseController, readAllCoursesController } from "../controllers/courses.controllers";

const coursesRoutes: Router = Router();

coursesRoutes.post("", validateBody(courseCreate), verifyToken, verifyUserPermission, createCourseController);
coursesRoutes.get("", verifyToken, readAllCoursesController);

export default coursesRoutes