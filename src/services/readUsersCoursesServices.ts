import { QueryResult } from "pg"
import { TUsersLinkedCoursesReturn } from "../interfaces/usersLinkedCourses.interfaces"
import { client } from "../database"
import AppError from "../errors/AppError";

const readUsersCourses = async (userId: string) => {
  console.log('oi')
  const queryString: string =
    `
      SELECT 
        c."id" AS "courseId",
        c."name" AS "courseName",
        c."description" AS "courseDescription",
        uc."active" AS "userActiveInCourse",
        u."id" AS "userId",
        u."name" AS "userName"
      FROM "courses" c
      JOIN "userCourses" uc
        ON c."id" = uc."courseId"
      JOIN "users" u
        ON u."id" = uc."userId"
      WHERE u."id" = $1
   `;
  const queryResult: QueryResult = await client.query(queryString, [userId]);

  if(queryResult.rowCount === 0) {
    throw new AppError("No course found", 404)
  }

  return queryResult.rows;
}

export default { readUsersCourses }