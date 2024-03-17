import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { artistRouter } from "../modules/artists/artist.route";
import { albumRouter } from "../modules/album/album.route";
import { SongRouter } from "../modules/song/song.route";

const router = express.Router();

const CoreRoutes = [
  {
    path: "/auth",
    element: AuthRoutes,
  },
  {
    path: "/songs",
    element: SongRouter,
  },
  {
    path: "/albums",
    element: albumRouter,
  },
  {
    path: "/artists",
    element: artistRouter,
  },
];

CoreRoutes.forEach((route) => router.use(route.path, route.element));

export default router;
