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
const retrieveSongs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SongServices.retrieveSongs();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieved songs",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateSong = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { songId } = req.params;
    const { ...updateInfo } = req.body;
    const result = await SongServices.updateSong(songId, updateInfo);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully updated a song",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteSong = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { songId } = req.params;
    const result = await SongServices.deleteSong(songId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully deleted a song",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const SongControllers = {
  createSong,
  retrieveSongs,
  updateSong,
  deleteSong,
};
