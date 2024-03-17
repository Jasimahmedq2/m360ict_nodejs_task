import express from "express";
import auth from "../../middleware/auth";
import ValidateRequest from "../../middleware/validateRequest";
import { SongValidation } from "./song.validation";
import { SongControllers } from "./song.controller";
const router = express.Router();

router.post(
  "/add_song",
  auth("user"),
  ValidateRequest(SongValidation.createSong),
  SongControllers.createSong
);

export const SongRouter = router;
