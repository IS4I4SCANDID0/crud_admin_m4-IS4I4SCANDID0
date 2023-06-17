import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../database";
import AppError from "../errors/AppError";

const verifyUserId = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.params.id;

  const queryUserId: QueryResult = await client.query(
    `SELECT * FROM "users" WHERE "id" = $1;`,
    [userId]
  );

  if(queryUserId.rowCount === 0 ) {
    throw new AppError("Course or user not found", 409)
  };
  
  return next();
};

export { verifyUserId }