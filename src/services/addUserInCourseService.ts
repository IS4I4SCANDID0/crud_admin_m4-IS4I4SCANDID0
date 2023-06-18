import { client } from "../database";

const enrollUserInCourse = async (userId: string, courseId: string): Promise<Object> => {
  const queryString: string = 
  `
    INSERT INTO "usersCourses"
      ("userId", "courseId")
    VALUES($1, $2)
    RETURNING *;
  `;
  await client.query(queryString, [userId, courseId]);

  return { message: "User successfully vinculed to course" }
}

export default { enrollUserInCourse }