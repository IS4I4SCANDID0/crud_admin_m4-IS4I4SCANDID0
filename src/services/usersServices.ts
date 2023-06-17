import format from "pg-format";
import { TUserCreate, TUserReturn, TUsersRead } from "../interfaces/users.interfaces";
import { userReturn, usersRead } from "../schemas/user.schema";
import { QueryResult } from "pg";
import { client } from "../database";
import { hash } from "bcryptjs";

const createUser = async (payload: TUserCreate): Promise<TUserReturn> => {
  payload.password = await hash(payload.password, 10)
 
  const queryFormat: string = format(
    `INSERT INTO "users" (%I) VALUES (%L) RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );
  const queryResult: QueryResult = await client.query(queryFormat);
  return userReturn.parse(queryResult.rows[0]);
};

const listAllUsers = async (): Promise<TUsersRead> => {
  const queryResult: QueryResult = await client.query(
    `SELECT * FROM "users";`
  );

  return usersRead.parse(queryResult.rows);
}

export default { createUser, listAllUsers }