import { z } from "zod";

const usersCourses = z.object({
  id: z.number().positive(),
  active: z.boolean().default(() => true)
});

const usersCoursesCreate = usersCourses.omit({ id: true });

export { usersCourses, usersCoursesCreate }