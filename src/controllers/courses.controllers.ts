import { Request, Response } from "express";
import { TCourses } from "../interfaces/courses.interfaces";
import cousersServices from "../services/cousersServices";
import addUserInCourseService from "../services/addUserInCourseService";
import unbindUserServices from "../services/unbindUserServices";
import readCoursesAndUsersLinkedServices from "../services/readCoursesAndUsersLinkedServices";


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
  
  await addUserInCourseService.enrollUserInCourse(userId, courseId);
  return res.status(201).json({ message: "User successfully vinculed to course" })
};

const unbindUserController = async (req: Request, res: Response): Promise<Response> => {
  await unbindUserServices.unbindUser(req.params.id);
  return res.status(204).json()
};

const listCoursesAndUsersController = async (req: Request, res: Response): Promise<Response> => {
  const coursesLinkedUsers = await readCoursesAndUsersLinkedServices.readCoursesAndUsersLinked(req.params.id)
  return res.status(200).json(coursesLinkedUsers)
};

export { createCourseController, readAllCoursesController, addUserInCourseController, unbindUserController, listCoursesAndUsersController }