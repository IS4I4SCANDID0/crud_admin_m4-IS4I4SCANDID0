import { QueryResult } from "pg"
import { client } from "../database"
import AppError from "../errors/AppError";

const readCoursesAndUsersLinked = async (courseId: string) => {
  const queryString: string =
  `
    SELECT
      u."id" AS "userId",
      u."name" AS "userName",
      c."id" AS "courseId",
      c."name" AS "courseName",
      c."description" AS "courseDescription",
      uc."active" AS "userActiveInCourse"
      FROM "courses" c
    JOIN
      "userCourses" uc ON c."id" = uc."courseId"
    JOIN
      "users" u ON u."id" = uc."userId"
    WHERE
      c."id" = $1
  
  `;
  const queryResult: QueryResult = await client.query(queryString, [courseId]);

  if(queryResult.rowCount === 0) {
    throw new AppError("No course found", 404)
  }

  return queryResult.rows;
}

export default { readCoursesAndUsersLinked }