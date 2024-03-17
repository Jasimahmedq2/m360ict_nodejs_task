import knex from "knex";
import knexConfig from "../../knexfile";
import config from "../../config";

interface Knexfile {
  [key: string]: {
    client: string;
    connection: {
      host?: string;
      database?: string;
      user?: string;
      password?: string;
      port?: number;
      ssl: {
        ca: Buffer;
      };
    };
    pool?: {
      min: number;
      max: number;
    };
    migrations: {
      tableName: string;
      directory: string;
    };
    seeds: {
      directory: string;
    };
  };
}

const environment = config.env || "development";

// Assert the type of knexConfig
const typedKnexConfig: Knexfile = knexConfig;

export default knex(typedKnexConfig[environment]);




// import knex from "knex";
// import knexFile from "../../knexfile";
// import config from "../../config";

// const environment = config.env || "development";

// export default knex(knexFile[environment]);
