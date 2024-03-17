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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumController = void 0;
const album_service_1 = require("./album.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const CreateAlbum = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.user;
        const _a = req.body, { artist_id } = _a, albumInfo = __rest(_a, ["artist_id"]);
        const result = yield album_service_1.AlbumServices.CreateAlbum(artist_id, albumInfo, userId);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "new album created",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const addArtistsToAlbum = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { artist_id, album_id } = req.body;
        const result = yield album_service_1.AlbumServices.addArtistsToAlbum(artist_id, album_id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "new artist added",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const retriveAlbums = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { albumId } = req.params;
        const result = yield album_service_1.AlbumServices.retriveAlbums(albumId);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "retrieved albums from db",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.AlbumController = {
    CreateAlbum,
    retriveAlbums,
    addArtistsToAlbum,
};
