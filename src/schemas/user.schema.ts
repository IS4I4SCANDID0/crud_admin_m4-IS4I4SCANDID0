import { z } from "zod";

const user = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().email().max(50),
  password: z.string().max(120),
  admin: z.boolean().default(() => false)
});

const userReturn = user.omit({ password: true });
const userCreate = user.omit({ id: true }).partial({ admin: true });
const usersRead = userReturn.array();


export { user, userCreate, usersRead, userReturn };