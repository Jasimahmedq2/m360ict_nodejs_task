"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const song_validation_1 = require("./song.validation");
const song_controller_1 = require("./song.controller");
const router = express_1.default.Router();
router.post("/add_song", (0, auth_1.default)("user"), (0, validateRequest_1.default)(song_validation_1.SongValidation.createSong), song_controller_1.SongControllers.createSong);
exports.SongRouter = router;
