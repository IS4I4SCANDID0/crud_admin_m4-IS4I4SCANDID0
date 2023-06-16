import { z } from "zod";
import { user, userCreate, userReturn, usersRead } from "../schemas/user.schema";
import { type } from "os";

type TUser = z.infer<typeof user>

type TUserCreate = z.infer<typeof userCreate>

type TUserReturn = z.infer<typeof userReturn>

type TUsersRead = z.infer<typeof usersRead>

export { TUser, TUserCreate, TUsersRead, TUserReturn }