import config from "./config";
import fs from "fs";
import path from "path";

const caPemPath = path.join(__dirname, "..", "certificates", "ca.pem");

const knexConfig = {
  development: {
    client: "pg",
    connection: {
      host: config.postgreServer.service_host,
      database: config.postgreServer.database_name,
      user: config.postgreServer.service_user,
      password: config.postgreServer.service_password,
      port: 18042,
      ssl: {
        ca: fs.readFileSync(caPemPath),
      },
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "database", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "database", "seeds"),
    },
  },

  production: {
    client: "pg",
    connection: {
      host: config.postgreServer.service_host,
      database: config.postgreServer.database_name,
      user: config.postgreServer.service_user,
      password: config.postgreServer.service_password,
      ssl: {
        ca: fs.readFileSync(caPemPath),
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "database", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "database", "seeds"),
    },
  },
};

export default knexConfig;
