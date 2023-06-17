import format from "pg-format";
import { TCourses, TCoursesCreate, TCoursesRead } from "../interfaces/courses.interfaces";
import { QueryResult } from "pg";
import { client } from "../database";

const createCourse =  async (payload: TCoursesCreate): Promise<TCourses> => {
  const queryFormat: string = format(
    `INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );
  const queryResult: QueryResult = await client.query(queryFormat);
  return queryResult.rows[0]
};

const readAllCourses = async (): Promise<TCoursesRead> => {
  const queryResult: QueryResult = await client.query(
    `SELECT * FROM "courses";`
  );

  return queryResult.rows; 
}  

export default { createCourse, readAllCourses }