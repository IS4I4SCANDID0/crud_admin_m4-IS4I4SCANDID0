import { z } from "zod";
import { usersCourses, usersCoursesCreate } from "../schemas/usersCourses.schemas";

type TUsersCourses = z.infer<typeof usersCourses>

type TUsersCoursesCreate = z.infer<typeof usersCoursesCreate>

export { TUsersCourses, TUsersCoursesCreate }