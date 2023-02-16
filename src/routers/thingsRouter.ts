import { Router } from "express";
import { getThingsList } from "../controllers/thingsControllers";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/", getThingsList);
