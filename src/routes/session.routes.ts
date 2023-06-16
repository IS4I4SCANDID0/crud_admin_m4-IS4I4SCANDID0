import { Router } from "express";
import { validateBody } from "../middlewares/validateBodyRequest";
import { sessionLoginSchema } from "../schemas/session.schema";
import { loginUserController } from "../controllers/session.controllers";

const sessionRouter: Router = Router();

sessionRouter.post("", validateBody(sessionLoginSchema), loginUserController)

export default sessionRouter