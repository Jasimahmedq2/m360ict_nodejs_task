import app from "./app";
import colors from "colors";
import config from "./config";

const port = 5000 || config.port

const connectDb = async () => {
  app.listen(port, () => {
    console.log(colors.green(`hey, I am listening the db perfectly! here is go:${port}` ));
  });
};

connectDb();
