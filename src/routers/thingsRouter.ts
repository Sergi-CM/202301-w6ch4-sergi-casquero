import { Router } from "express";
import {
  getThingById,
  getThingsList,
} from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/things", getThingsList);
thingsRouter.get("/things/:id", getThingById);
