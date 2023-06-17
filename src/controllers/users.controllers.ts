import { Request, Response } from "express";
import { TUserReturn } from "../interfaces/users.interfaces";
import usersServices from "../services/usersServices";

const registerUserController = async (req: Request, res: Response): Promise<Response> => {
  const user: TUserReturn = await usersServices.createUser(res.locals.validated);
  return res.status(201).json(user);
};

const listUsersController = async (req: Request, res: Response): Promise<Response> => {
  const allUsers = await usersServices.listAllUsers()
  return res.status(200).json(allUsers)
};

export { registerUserController, listUsersController }