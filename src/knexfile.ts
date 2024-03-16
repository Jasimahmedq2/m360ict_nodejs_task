import config from "./config";
import fs from "fs";

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
        ca: fs.readFileSync("./certificates/ca.pem"),
      },
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "src/database/migrations",
    },
    seeds: {
      directory: "src/database/seeds",
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
        ca: fs.readFileSync("./certificates/ca.pem"),
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "src/database/migrations",
    },
    seeds: {
      directory: "src/database/seeds",
    },
  },
};

export default knexConfig;
