import { z } from "zod";
import { sessionLoginSchema } from "../schemas/session.schema";

type TSessionLogin = z.infer<typeof sessionLoginSchema>;
type TSessionReturn = {
  token: string
};

export { TSessionLogin, TSessionReturn }