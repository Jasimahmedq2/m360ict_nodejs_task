import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalMiddleware from "./app/middleware/globalErrorHandler";
import colors from "colors";
import config from "./config";

const port = 5000 || config.port;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", router);

app.get("/", async (req: Request, res: Response) => {
  res.send(`yee, the server is running successfully}`);
});

app.listen(port, () => {
  console.log(colors.green("hey, I am listening the db perfectly"));
});

app.use(globalMiddleware);

export default app;
