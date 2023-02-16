import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import thingsRouter from "./routers/thingsRouter.js";
import { askCanEdit, askPort } from "./userSetup.js";

let userPort: number;
let canEdit: boolean;

await askPort();
await askCanEdit();

const port = process.env.PORT ?? 4100;

const app = express();

app.listen(port);

app.use(morgan("dev"));

app.use("/", thingsRouter);

app.use(express.json());
