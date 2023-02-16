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

export const deleteThingById = (req: Request, res: Response) => {
  const listWithoutDeletedThing = thingsAlreadyKnow.filter(
    (thing) => thing.id !== +req.params.id
  );
  res.status(204).json(listWithoutDeletedThing);
};

export const addThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingStructure
  >,
  res: Response
) => {
  req.headers["content-type"] = "application/json";

  const newThing = { ...req.body, id: Date.now };
  const newList = [...thingsAlreadyKnow, newThing];

  res.status(201).json(newList);
};
