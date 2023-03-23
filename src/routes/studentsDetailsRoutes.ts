import { Router } from "express";
import * as Controller from "../controllers/studentDetails";

const studentsDetailsRoutes = Router();

// get student with reg no and student password
studentsDetailsRoutes.post("/single", Controller.getStudent);

// get student with reg no and admin password
studentsDetailsRoutes.post("/admin", Controller.getStudentFromAdmin);

export default studentsDetailsRoutes;
