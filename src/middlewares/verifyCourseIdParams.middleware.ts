import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../database";
import AppError from "../errors/AppError";

const verifyCourseId = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const courseId = req.params.id;

  const queryCourseId: QueryResult = await client.query(
    `SELECT * FROM "users" WHERE "id" = $1;`,
    [courseId]
  );

  if(queryCourseId.rowCount === 0 ) {
    throw new AppError("Course or user not found", 409)
  };
  
  return next();
};

export { verifyCourseId }