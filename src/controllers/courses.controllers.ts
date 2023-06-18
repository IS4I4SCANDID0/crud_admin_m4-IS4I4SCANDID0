import { Request, Response } from "express";
import { TCourses } from "../interfaces/courses.interfaces";
import cousersServices from "../services/cousersServices";
import addUserInCourseService from "../services/addUserInCourseService";


const createCourseController = async (req: Request, res: Response): Promise<Response> => {
  const { validated } = res.locals
  
  const course: TCourses = await cousersServices.createCourse(validated);
  return res.status(201).json(course);
};

const readAllCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const allCourses = await cousersServices.readAllCourses()
  return res.status(200).json(allCourses)
};

const addUserInCourseController = async (req: Request, res: Response): Promise<Response> => {
  const { courseId, userId } = req.params
  
  const linkedStudent = await addUserInCourseService.enrollUserInCourse(userId, courseId);
  return res.status(200).json(linkedStudent)
};

export { createCourseController, readAllCoursesController, addUserInCourseController }