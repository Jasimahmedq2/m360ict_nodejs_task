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
exports.AuthUserServices = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../shared/jwtHelpers");
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const db_1 = __importDefault(require("../../db/db"));
const user_role_1 = require("../../../enums/user.role");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.password = yield bcrypt_1.default.hash(payload.password, Number(config_1.default.bcrypt_salt_rounds));
    const isExistUser = yield (0, db_1.default)("users").where({ email: payload.email }).first();
    console.log({ isExistUser });
    if (isExistUser) {
        throw new apiError_1.default(401, "the user already exist");
    }
    const result = yield (0, db_1.default)("users").insert(payload);
    return result;
});
const LogIn = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield (0, db_1.default)("users").where({ email: payload.email }).first();
    console.log({ isUserExist });
    if (!isUserExist) {
        throw new apiError_1.default(404, "user doesn't exist");
    }
    const isPasswordMatched = yield bcrypt_1.default.compare(payload.password, isUserExist.password);
    if (!isPasswordMatched) {
        throw new apiError_1.default(401, "your email & password doesn't match");
    }
    const accessToken = yield jwtHelpers_1.JwtHelpers.createToken({
        userId: isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.id,
        role: user_role_1.UserRoles.USER,
    }, config_1.default.jwt.access_secret, config_1.default.jwt.access_expire);
    return {
        token: accessToken,
    };
});
exports.AuthUserServices = {
    createUser,
    LogIn,
};
