import 'dotenv/config'
import { QueryResult } from "pg";
import { TSessionLogin, TSessionReturn } from "../interfaces/session.interfaces";
import { client } from "../database";
import AppError from "../errors/AppError";
import { TUser } from "../interfaces/users.interfaces";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

const createSessionLogin = async (payload: TSessionLogin): Promise<TSessionReturn> => {
  const query: QueryResult = await client.query(
    `SELECT * FROM "users" WHERE "email" = $1;`,
    [payload.email]
  );

  if(query.rowCount === 0) {
    throw new AppError("Wrong email/password", 401)
  };

  const user: TUser = query.rows[0];

  const samePassword: boolean =  await compare(payload.password, user.password)

  if(!samePassword){
    throw new AppError("Wrong email/password", 401) 
  };
  
  const token: string = sign(
    {email: user.email, admin: user.admin},
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  )
  
  return { token }
}

export { createSessionLogin }