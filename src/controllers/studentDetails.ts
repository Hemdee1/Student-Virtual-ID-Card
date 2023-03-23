import { RequestHandler } from "express";
import studentsDetails from "../studentsDetails";
import createHttpError, { isHttpError } from "http-errors";

type reqBodyType = {
  regNo: string;
  password: string;
};

export const getStudent: RequestHandler<
  unknown,
  unknown,
  reqBodyType,
  unknown
> = async (req, res) => {
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
};

export const getStudentFromAdmin: RequestHandler<
  unknown,
  unknown,
  reqBodyType,
  unknown
> = async (req, res) => {
  // const { regNo, password } = req.body;
  const { regNo, password } = req.body;
  const adminPassword = "admin";

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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: serverPassword, ...details } = stdDetails;

    if (adminPassword !== password) {
      throw createHttpError(401, "Admin password incorrect");
    }

    res.status(200).json(details);
  } catch (error) {
    if (isHttpError(error)) {
      res.status(error.status).json({ error: error.message });
    }
  }
};
