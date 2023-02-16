import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import thingsRouter from "./routers/thingsRouter.js";

const port = process.env.PORT ?? 4100;

const app = express();

app.listen(port);

app.use(morgan("dev"));

app.use("/", thingsRouter);

app.use(express.json());
