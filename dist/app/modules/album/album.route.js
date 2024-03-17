"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const album_validation_1 = require("./album.validation");
const album_controller_1 = require("./album.controller");
const router = express_1.default.Router();
router.post("/add_album", (0, auth_1.default)("user"), (0, validateRequest_1.default)(album_validation_1.AlmubValidation.CreateAlbum), album_controller_1.AlbumController.CreateAlbum);
router.post("/add_artist_to_album", (0, auth_1.default)("user"), (0, validateRequest_1.default)(album_validation_1.AlmubValidation.addArtistToAlbum), album_controller_1.AlbumController.addArtistsToAlbum);
router.get("/:albumId", (0, auth_1.default)("user"), album_controller_1.AlbumController.retriveAlbums);
exports.albumRouter = router;
