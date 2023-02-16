import { Router } from "express";
import {
  deleteThingById,
  getThingById,
  getThingsList,
} from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/things", getThingsList);
thingsRouter.get("/things/:id", getThingById);
thingsRouter.delete("/things/:id", deleteThingById);

export default thingsRouter;
