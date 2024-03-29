import { NextFunction, Request, Response } from "express";
import { IGenericErrorMessage } from "../../interfaces/error";
import ApiError from "../../errors/apiError";

const globalMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 400;
  let message = "something went wrong";
  let errorMessage: IGenericErrorMessage[] = [];

  if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errorMessage = error.message
      ? [
          {
            path: "",
            message: error.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error.message;
    errorMessage = error.message
      ? [
          {
            path: "",
            message: error.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
    errorMessage: errorMessage,
  });
  next();
};

export default globalMiddleware;
