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
exports.SongControllers = void 0;
const song_service_1 = require("./song.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const createSong = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield song_service_1.SongServices.createSong(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "successfully added a new song",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.SongControllers = {
    createSong,
};
