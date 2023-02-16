import { Router } from "express";
import {
  addThing,
  deleteThingById,
  getThingById,
  getThingsList,
} from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/things", getThingsList);
thingsRouter.get("/things/:id", getThingById);
thingsRouter.delete("/things/:id", deleteThingById);
thingsRouter.post("/things", addThing);

export default thingsRouter;
