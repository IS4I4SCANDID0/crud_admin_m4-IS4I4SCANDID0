import format from "pg-format";
import { TUserCreate, TUserReturn, TUsersRead } from "../interfaces/users.interfaces";
import { userReturn } from "../schemas/user.schema";
import { QueryResult } from "pg";
import { client } from "../database";

const createUser = async (payload: TUserCreate): Promise<TUserReturn> => {
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
    return queryResult.rows
  // return usersRead.parse(queryResult.rows);
}

export default { createUser, listAllUsers }