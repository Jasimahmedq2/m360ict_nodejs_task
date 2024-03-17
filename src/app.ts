import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalMiddleware from "./app/middleware/globalErrorHandler";
import router from "./app/routes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("yee, the server is running successfully, hello");
});

app.use(globalMiddleware);

export default app;
