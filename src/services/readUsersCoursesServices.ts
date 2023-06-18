import { QueryResult } from "pg"
import { TUsersLinkedCoursesReturn } from "../interfaces/usersLinkedCourses.interfaces"
import { client } from "../database"
import AppError from "../errors/AppError";

const readUsersCourses = async (userId: string) => {
  const queryString: string =
    `
      SELECT 
        c."id" as "courseId",
        c."name" as "courseName",
        c."description" as "courseDescription",
        uc."active" as "userActiveInCourse",
        u."id" as "userId",
        u."name" as "userName"
      FROM "courses" c
      JOIN "usersCourses" uc
        ON c.id = uc."userId"
      JOIN "users" u
        ON u.id = uc."userId"
      WHERE u.id = $1
   `;
  const queryResult: QueryResult = await client.query(queryString, [userId]);

  if(queryResult.rowCount === 0) {
    throw new AppError("No course found", 404)
  }

  return queryResult.rows;
}

export default { readUsersCourses }

// ! USAR ESSE MODELO DE QUERY [LINHA 9 ATÉ A 21] PARA LISTAR TODOS OS CURSOS E USUÁRIOS MATRICULADOS /**/