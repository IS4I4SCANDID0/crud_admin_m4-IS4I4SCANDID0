import { Request, Response } from "express";
import { TSessionReturn } from "../interfaces/session.interfaces";
import { createSessionLogin } from "../services/sessionServices";

const loginUserController = async (req: Request, res: Response): Promise<Response> => {
 const { validated } = res.locals
 
  const token: TSessionReturn = await createSessionLogin(validated)
  return res.status(200).json(token);
}

export { loginUserController }