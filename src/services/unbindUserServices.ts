import { client } from "../database";

const unbindUser = async (userId: string): Promise<void> => {
  const queryString: string = `
      UPDATE "userCourses"
      SET active = false
      WHERE id = $1
    `;
  await client.query(queryString, [userId]);
};

export default { unbindUser }
