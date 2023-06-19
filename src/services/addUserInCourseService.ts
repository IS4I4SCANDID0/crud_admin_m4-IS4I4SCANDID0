import { QueryResult } from "pg";
import { client } from "../database";
import AppError from "../errors/AppError";

const enrollUserInCourse = async (userId: string, courseId: string): Promise<Object> => {
  // const checkQuery: string = `
  //   SELECT * FROM "usersCourses"
  //   WHERE "userId" = $1 AND "courseId" = $2;
  // `;

  // const checkResult: QueryResult = await client.query(checkQuery, [userId, courseId]);
  
  // if(checkResult.rowCount > 0) {
  //   throw new AppError("User is already enrolled in the course.", 409)
  // }

  const queryString: string = 
  `
    INSERT INTO "usersCourses"
      ("userId", "courseId")
    VALUES($1, $2)
    RETURNING *;
  `;
  const queryResult: QueryResult = await client.query(queryString, [userId, courseId]);
  console.log(queryResult)
  return queryResult.rows[0];
}

export default { enrollUserInCourse }