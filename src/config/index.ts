import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  db_string: process.env.DB_STRING,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  postgress_pass: process.env.POSTGRESS_PASS,
  jwt: {
    access_secret: process.env.ACCESS_SECRET,
    access_expire: process.env.ACCESS_EXPIRE,
    verify_secret: process.env.VERIFY_SECRET,
    verify_email_expire: process.env.VERIFY_EMAIL_EXPIRE,
  },
  postgreServer: {
    service_url: process.env.SERVICE_URL,
    service_host: process.env.SERVICE_HOST,
    service_port: process.env.SERVICE_PORT,
    service_user: process.env.SERVICE_USER,
    service_password: process.env.SERVICE_PASSWORD,
    database_name: process.env.DATABASE_NAME,
    ssl: process.env.SERVICE_SSL,
    ca: process.env.CA
  },
  my_email: process.env.MY_EMAIL,
  my_password: process.env.MY_PASSWORD,
};
