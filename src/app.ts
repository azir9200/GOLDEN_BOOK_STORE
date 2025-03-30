import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

// ✅ Configure CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://car-refresh-service-87ur6gbfy-azir-uddins-projects.vercel.app",
    ],
    credentials: true,
  })
);
// app.use(cookieParser());

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options("*", cors());
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "golden book store server..",
  });
});
// ✅ Serve API Routes
app.use("/api/v1", router);

app.use(globalErrorHandler);

export default app;
