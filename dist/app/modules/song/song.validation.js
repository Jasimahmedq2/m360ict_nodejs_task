"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongValidation = void 0;
const zod_1 = require("zod");
const createSong = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "title is required",
        }),
        duration: zod_1.z.number({
            required_error: "song duration is required",
        }),
        album_id: zod_1.z.number({
            required_error: "album_id is required",
        }),
    }),
});
exports.SongValidation = {
    createSong,
};
