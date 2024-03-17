import express from "express";
import auth from "../../middleware/auth";

import ValidateRequest from "../../middleware/validateRequest";
import { AlmubValidation } from "./album.validation";
import { AlbumController } from "./album.controller";

const router = express.Router();

router.post(
  "/add_album",
  auth("user"),
  ValidateRequest(AlmubValidation.CreateAlbum),
  AlbumController.CreateAlbum
);
router.post(
  "/add_artist_to_album",
  auth("user"),
  ValidateRequest(AlmubValidation.addArtistToAlbum),
  AlbumController.addArtistsToAlbum
);
router.get("/retrieve", auth("user"), AlbumController.retriveAlbums);

export const albumRouter = router;
