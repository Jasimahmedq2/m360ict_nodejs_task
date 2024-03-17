"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsController = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const artist_service_1 = require("./artist.service");
const createArtist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield artist_service_1.ArtistsServices.createArtist(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully created a artist",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.ArtistsController = {
    createArtist,
};
