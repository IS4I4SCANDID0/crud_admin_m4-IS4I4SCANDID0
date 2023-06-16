import { z } from "zod";

const courses = z.object({
  id: z.number().positive(),
  name: z.string().max(15),
  description: z.string()
})

const courseCreate = courses.omit({ id: true });
const coursesRead = courses.array();

export { courses, courseCreate, coursesRead };