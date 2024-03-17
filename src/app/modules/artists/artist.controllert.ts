import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { ArtistsServices } from "./artist.service";

const createArtist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ArtistsServices.createArtist(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully created a artist",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ArtistsController = {
  createArtist,
};
