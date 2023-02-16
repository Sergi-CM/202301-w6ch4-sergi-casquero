import { Router } from "express";
import { getThingsList } from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/", getThingsList);
