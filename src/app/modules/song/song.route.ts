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
router.get("/", auth("user"), SongControllers.retrieveSongs);
router.post("/:songId", auth("user"), SongControllers.updateSong);
router.delete("/:songId", auth("user"), SongControllers.deleteSong);

export const SongRouter = router;
