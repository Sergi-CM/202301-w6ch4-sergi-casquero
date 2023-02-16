import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import thingsAlreadyKnow from "./data/thingsAlreadyKnow.js";

const port = process.env.PORT ?? 4100;

const app = express();

app.use(morgan("combined"));

app.get("/things", (req, res) => {
  res.status(200).json(thingsAlreadyKnow);
});

app.get("/things/:id", (req, res) => {
  const thingIknow = thingsAlreadyKnow.find(
    (thing) => thing.id === +req.params.id
  );
  res.status(200).json(thingIknow);
});
