import knex from "knex";
import knexFile from "../../knexfile";
import config from "../../config";

const environment = config.env || "development";

export default knex(knexFile[environment]);
