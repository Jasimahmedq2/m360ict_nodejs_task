"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const caPemPath = path_1.default.join(__dirname, "..", "certificates", "ca.pem");
const knexConfig = {
    development: {
        client: "pg",
        connection: {
            host: config_1.default.postgreServer.service_host,
            database: config_1.default.postgreServer.database_name,
            user: config_1.default.postgreServer.service_user,
            password: config_1.default.postgreServer.service_password,
            port: 18042,
            ssl: {
                ca: fs_1.default.readFileSync(caPemPath),
            },
        },
        migrations: {
            tableName: "knex_migrations",
            directory: path_1.default.join(__dirname, "database", "migrations"),
        },
        seeds: {
            directory: path_1.default.join(__dirname, "database", "seeds"),
        },
    },
    production: {
        client: "pg",
        connection: {
            host: config_1.default.postgreServer.service_host,
            database: config_1.default.postgreServer.database_name,
            user: config_1.default.postgreServer.service_user,
            password: config_1.default.postgreServer.service_password,
            ssl: {
                ca: fs_1.default.readFileSync(caPemPath),
            },
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: path_1.default.join(__dirname, "database", "migrations"),
        },
        seeds: {
            directory: path_1.default.join(__dirname, "database", "seeds"),
        },
    },
};
exports.default = knexConfig;
