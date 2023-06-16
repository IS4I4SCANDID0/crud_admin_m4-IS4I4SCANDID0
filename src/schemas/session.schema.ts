import { z } from "zod";

const sessionLoginSchema = z.object({
  email: z.string().email().max(50),
  password: z.string().max(120) 
});

export { sessionLoginSchema };