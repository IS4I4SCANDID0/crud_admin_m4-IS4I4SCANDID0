import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../database";
import AppError from "../errors/AppError";

const verifyCourseId = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const courseId = req.params.courseId;
  
  const queryCourseId: QueryResult = await client.query(
    `SELECT * FROM "courses" WHERE "id" = $1;`,
    [courseId]
  );

  if(queryCourseId.rowCount === 0 ) {
    throw new AppError("User/course not found", 404)
  };
  
  return next();
};

export { verifyCourseId }