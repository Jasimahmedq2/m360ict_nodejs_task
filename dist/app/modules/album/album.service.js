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
exports.AlbumServices = void 0;
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const db_1 = __importDefault(require("../../db/db"));
const CreateAlbum = (artist_id, payload, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    // add user id to the album
    payload.user_id = user_id;
    try {
        const [albumId] = yield (0, db_1.default)("albums").insert(payload).returning("id");
        if (albumId && artist_id) {
            yield (0, db_1.default)("albums_artists").insert({
                album_id: albumId === null || albumId === void 0 ? void 0 : albumId.id,
                artist_id: artist_id,
            });
        }
        return {
            message: "success",
        };
    }
    catch (error) {
        throw new apiError_1.default(400, `something went wrong: ${error}`);
    }
});
const addArtistsToAlbum = (artist_id, album_id) => __awaiter(void 0, void 0, void 0, function* () {
    const isArtistExist = yield (0, db_1.default)("albums_artists")
        .where({
        album_id: album_id,
        artist_id: artist_id,
    })
        .first();
    console.log({ album_id, isArtistExist, artist_id });
    // throw an error if artist exist
    if (isArtistExist) {
        throw new apiError_1.default(401, "the artist already exist in the album");
    }
    const addArtist = yield (0, db_1.default)("albums_artists")
        .insert({
        album_id: album_id,
        artist_id: artist_id,
    })
        .returning("*");
    return addArtist;
});
const retriveAlbums = (albumId) => __awaiter(void 0, void 0, void 0, function* () {
    const album = yield (0, db_1.default)("albums")
        .where({ id: albumId })
        .first();
    if (!album) {
        throw new apiError_1.default(401, "album not found");
    }
    const artists = yield (0, db_1.default)("artists")
        .join("albums_artists", "artists.id", "=", "albums_artists.artist_id")
        .where("albums_artists.album_id", "=", albumId)
        .select("artists.*");
    const albumWithArtists = {
        album,
        artists,
    };
    return albumWithArtists;
});
const removeAlbum = (album_id) => __awaiter(void 0, void 0, void 0, function* () {
    const remove = yield (0, db_1.default)('albums').where({ id: album_id }).del();
    return {
        message: "success"
    };
});
exports.AlbumServices = {
    CreateAlbum,
    retriveAlbums,
    addArtistsToAlbum,
};
