import { NextFunction, Request, Response } from "express";
import { AuthUserServices } from "./auth.services";
import { IUser } from "./auth.interfaces";
import sendResponse from "../../../shared/sendResponse";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthUserServices.createUser(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully created a user, check your email to verify your account",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const LogIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthUserServices.LogIn(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully logged in a user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



export const AuthUserControllers = {
  createUser,
  LogIn,

};
