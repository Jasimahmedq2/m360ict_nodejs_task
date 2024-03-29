"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidationSchema = void 0;
const zod_1 = require("zod");
const CreateUser = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "username is required",
        }),
        email: zod_1.z.string({
            required_error: "email is required",
        }),
    }),
});
const logInUser = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "email is required",
        }),
        password: zod_1.z.string({
            required_error: "password is required",
        }),
    }),
});
exports.AuthValidationSchema = {
    CreateUser,
    logInUser,
};
