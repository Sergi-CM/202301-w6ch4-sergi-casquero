import { type Request, type Response } from "express";
import thingsAlreadyKnow from "../data/thingsAlreadyKnow.js";

export const getThingsList = (req: Request, res: Response) => {
  res.status(200).json(thingsAlreadyKnow);
};

export const getThingById = (req: Request, res: Response) => {
  const thingIknow = thingsAlreadyKnow.find(
    (thing) => thing.id === +req.params.id
  );
  res.status(200).json(thingIknow);
};
