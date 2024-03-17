"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const artist_controllert_1 = require("./artist.controllert");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const artist_validation_1 = require("./artist.validation");
const router = express_1.default.Router();
router.post("/add_artist", (0, auth_1.default)("user"), (0, validateRequest_1.default)(artist_validation_1.artistsValidation.CreateArtist), artist_controllert_1.ArtistsController.createArtist);
exports.artistRouter = router;
