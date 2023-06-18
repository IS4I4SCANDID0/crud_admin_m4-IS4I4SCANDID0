import { Request, Response } from "express";
import { TUserReturn } from "../interfaces/users.interfaces";
import usersServices from "../services/usersServices";
import readUsersCoursesServices from "../services/readUsersCoursesServices";

const registerUserController = async (req: Request, res: Response): Promise<Response> => {
  const user: TUserReturn = await usersServices.createUser(res.locals.validated);
  return res.status(201).json(user);
};

const listUsersController = async (req: Request, res: Response): Promise<Response> => {
  const allUsers = await usersServices.listAllUsers()
  return res.status(200).json(allUsers)
};

const readUsersLinkedCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const usersLinkedCourses = await readUsersCoursesServices.readUsersCourses(req.params.id)
  return res.status(200).json(usersLinkedCourses)
};

export { registerUserController, listUsersController, readUsersLinkedCoursesController }