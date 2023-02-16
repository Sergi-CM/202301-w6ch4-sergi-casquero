import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import thingsAlreadyKnow from "./data/thingsAlreadyKnow.js";
import {
  getThingById,
  getThingsList,
} from "./controllers/thingsControllers.js";
import { thingsRouter } from "./routers/thingsRouter.js";

const port = process.env.PORT ?? 4100;

const app = express();

app.listen(port);

app.use(morgan("dev"));

app.use("/things", thingsRouter);

app.get("/things", getThingsList);

app.get("/things/:id", getThingById);
