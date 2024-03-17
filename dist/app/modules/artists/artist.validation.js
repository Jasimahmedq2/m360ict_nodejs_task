"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistsValidation = void 0;
const zod_1 = require("zod");
const CreateArtist = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: " artist name is required",
        }),
    }),
});
exports.artistsValidation = {
    CreateArtist,
};
