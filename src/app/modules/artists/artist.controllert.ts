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

const retrieveArtists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ArtistsServices.retrieveArtists();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve artists",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const removeArtist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { artistId } = req.params;
    const result = await ArtistsServices.removeArtist(artistId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully removed a  artist",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateArtist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { artistId } = req.params;
    const { name } = req.body;
    const result = await ArtistsServices.updateArtist(artistId, name);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "successfully removed a  artist",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ArtistsController = {
  createArtist,
  retrieveArtists,
  removeArtist,
  updateArtist,
};
