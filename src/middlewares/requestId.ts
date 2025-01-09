import { Response, NextFunction } from "express";
import { IIdentifiedRequest } from "@/types/interfaces";

export default function requestId(
  req: IIdentifiedRequest,
  res: Response,
  next: NextFunction
) {
  const requestId = crypto.randomUUID();
  req.id = requestId;
  next();
}
