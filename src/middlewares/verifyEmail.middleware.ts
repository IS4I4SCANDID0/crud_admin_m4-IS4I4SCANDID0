import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../database";
import AppError from "../errors/AppError";

const verifyEmail = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email } = req.body;

  if(!email) return next();

  const queryUserEmail: QueryResult = await client.query(
    `SELECT * FROM "users" WHERE "email" = $1;`,
    [email]
  );
  if(queryUserEmail.rowCount !== 0 ) {
    throw new AppError("Email already registered", 409)
  };
  
  return next();
};

export { verifyEmail }