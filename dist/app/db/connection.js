"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const fs_1 = __importDefault(require("fs"));
const config_1 = __importDefault(require("../../config"));
const pool = new pg_1.Pool({
    host: config_1.default.postgreServer.service_host,
    database: config_1.default.postgreServer.database_name,
    user: config_1.default.postgreServer.service_user,
    password: config_1.default.postgreServer.service_password,
    port: 18042,
    ssl: {
        ca: fs_1.default.readFileSync("./certificates/ca.pem"),
    },
});
exports.default = pool;
