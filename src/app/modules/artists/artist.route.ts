import express from "express";
import auth from "../../middleware/auth";
import { ArtistsController } from "./artist.controllert";
import ValidateRequest from "../../middleware/validateRequest";
import { artistsValidation } from "./artist.validation";
const router = express.Router();

router.post(
  "/add_artist",
  auth("user"),
  ValidateRequest(artistsValidation.CreateArtist),
  ArtistsController.createArtist
);

export const artistRouter = router;
