"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const artist_route_1 = require("../modules/artists/artist.route");
const album_route_1 = require("../modules/album/album.route");
const song_route_1 = require("../modules/song/song.route");
const router = express_1.default.Router();
const CoreRoutes = [
    {
        path: "/auth",
        element: auth_route_1.AuthRoutes,
    },
    {
        path: "/artists",
        element: artist_route_1.artistRouter,
    },
    {
        path: "/albums",
        element: album_route_1.albumRouter,
    },
    {
        path: "/songs",
        element: song_route_1.SongRouter,
    },
];
CoreRoutes.forEach((route) => router.use(route.path, route.element));
exports.default = router;
