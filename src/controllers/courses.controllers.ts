import { Request, Response } from "express";
import { TCourses } from "../interfaces/courses.interfaces";
import cousersServices from "../services/cousersServices";


const createCourseController = async (req: Request, res: Response): Promise<Response> => {
  const { validated } = res.locals
  
  const course: TCourses = await cousersServices.createCourse(validated);
  return res.status(201).json(course);
};

const readAllCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const allCourses = await cousersServices.readAllCourses()
  return res.status(200).json(allCourses)
}

export { createCourseController, readAllCoursesController }