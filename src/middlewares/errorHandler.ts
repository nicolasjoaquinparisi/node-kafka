import { Response, NextFunction } from "express";
import { IIdentifiedRequest } from "../types/interfaces";
import logger from "../helpers/logger";
import HTTPRequestError from "../errors/HTTPRequestError";

export default function errorHandler(
  err: Error,
  req: IIdentifiedRequest,
  res: Response,
  next: NextFunction
) {
  if (req?.logger) {
    req?.logger.error(err);
  } else {
    logger.error(err);
  }

  if (err instanceof HTTPRequestError) {
    return res.status(err.status).send({ message: err.message });
  }

  res.status(503).send({ message: "Service unavailable" });
}
