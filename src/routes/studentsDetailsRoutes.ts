import { Router } from "express";
import studentsDetails from "../studentsDetails";
import createHttpError, { isHttpError } from "http-errors";

const studentsDetailsRoutes = Router();

studentsDetailsRoutes.get("/", (req, res) => {
  res.status(200).json(studentsDetails);
});

type reqBodyType = {
  regNo: string;
  password: string;
};

studentsDetailsRoutes.post<unknown, unknown, reqBodyType, unknown>(
  "/single",
  (req, res) => {
    const { regNo, password } = req.body;

    try {
      if (!regNo) {
        throw createHttpError(400, "Reg number is required");
      }

      if (!password) {
        throw createHttpError(400, "Password is required");
      }

      const stdDetails = studentsDetails.filter(
        (student) => student.regNo.toLowerCase() === regNo.toLowerCase()
      )[0];

      if (!stdDetails) {
        throw createHttpError(
          404,
          "Student not found, check the reg number and try again"
        );
      }

      const { password: serverPassword, ...details } = stdDetails;

      if (serverPassword !== password) {
        throw createHttpError(401, "Password incorrect");
      }

      res.status(200).json(details);
    } catch (error) {
      if (isHttpError(error)) {
        res.status(error.status).json({ error: error.message });
      }
    }
  }
);

export default studentsDetailsRoutes;
