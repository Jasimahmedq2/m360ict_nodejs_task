import { NextFunction, Request, Response } from "express";
import { AlbumServices } from "./album.service";
import sendResponse from "../../../shared/sendResponse";

const CreateAlbum = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = (req as any).user;
    const { artist_id, ...albumInfo } = req.body;
    const result = await AlbumServices.CreateAlbum(
      artist_id,
      albumInfo,
      userId
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "new album created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const addArtistsToAlbum = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { artist_id, album_id } = req.body;
    const result = await AlbumServices.addArtistsToAlbum(artist_id, album_id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "new artist added",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const retriveAlbums = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { albumId } = req.params;
    const result = await AlbumServices.retriveAlbums(albumId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "retrieved albums from db",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AlbumController = {
  CreateAlbum,
  retriveAlbums,
  addArtistsToAlbum,
};
