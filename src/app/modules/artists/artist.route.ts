import express from "express";
import auth from "../../middleware/auth";
import { ArtistsController } from "./artist.controllert";
import ValidateRequest from "../../middleware/validateRequest";
import { artistsValidation } from "./artist.validation";
import { UserRoles } from "../../../enums/user.role";
const router = express.Router();

router.get("/", auth(UserRoles.USER), ArtistsController.retrieveArtists);

router.post(
  "/add_artist",
  auth("user"),
  ValidateRequest(artistsValidation.CreateArtist),
  ArtistsController.createArtist
);
router.post("/:artistId", auth("user"), ArtistsController.updateArtist);

router.delete("/:artistId", ArtistsController.removeArtist);

export const artistRouter = router;
