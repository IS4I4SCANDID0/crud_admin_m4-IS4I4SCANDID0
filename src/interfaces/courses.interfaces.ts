import { z } from "zod";
import { courseCreate, courses, coursesRead } from "../schemas/courses.schema";

type TCourses = z.infer<typeof courses>

type TCoursesCreate = z.infer<typeof courseCreate>

type TCoursesRead = z.infer<typeof coursesRead>

export { TCourses, TCoursesCreate, TCoursesRead }