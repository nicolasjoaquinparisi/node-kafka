import { Response, NextFunction } from "express";
import logger from "@/helpers/logger";
import { IIdentifiedRequest } from "@/types/interfaces";

const requestLogger = (
  req: IIdentifiedRequest,
  res: Response,
  next: NextFunction
) => {
  req.logger = logger.child({ requestId: req.id });

  req.logger.info({
    message: "incoming request",
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
  });

  res.on("finish", () => {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      req?.logger?.info(`completed with status ${res.statusCode}`);
    } else {
      req?.logger?.error(`completed with status ${res.statusCode}`);
    }
  });
  next();
};

export default requestLogger;
