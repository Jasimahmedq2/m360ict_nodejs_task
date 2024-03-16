import { Pool } from "pg";
import fs from "fs";
import config from "../../config";
const pool = new Pool({
  host: config.postgreServer.service_host as string,
  database: config.postgreServer.database_name as string,
  user: config.postgreServer.service_user as string,
  password: config.postgreServer.service_password as string,
  port: 18042,
  ssl: {
    ca: fs.readFileSync("./certificates/ca.pem"),
  },
});

export default pool;
