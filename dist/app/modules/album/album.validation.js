"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlmubValidation = void 0;
const zod_1 = require("zod");
const CreateAlbum = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "title is required",
        }),
        release_year: zod_1.z.string({
            required_error: "release_year is required",
        }),
        genre: zod_1.z.string({
            required_error: "genre is required",
        }),
        artist_id: zod_1.z.number().optional(),
    }),
});
const addArtistToAlbum = zod_1.z.object({
    body: zod_1.z.object({
        album_id: zod_1.z.number({
            required_error: "album id is required",
        }),
        artist_id: zod_1.z.number({
            required_error: "artist  id is required",
        }),
    }),
});
exports.AlmubValidation = {
    CreateAlbum,
    addArtistToAlbum,
};
