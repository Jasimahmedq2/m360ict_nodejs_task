import { NextFunction, Request, Response } from "express";
import { SongServices } from "./song.service";
import sendResponse from "../../../shared/sendResponse";

const createSong = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SongServices.createSong(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully added a new song",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const SongControllers = {
  createSong,
};
