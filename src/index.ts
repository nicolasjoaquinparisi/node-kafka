import express, { json, urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";

import { env } from "@/config/env";
import corsOptions from "@/config/cors";

import { connectToDatabase } from "@/database/mongodb";

import requestId from "@/middlewares/requestId";
import requestLogger from "@/middlewares/requestLogger";
import errorHandler from "@/middlewares/errorHandler";

const { API_PORT } = env;

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(helmet());
app.use(cors(corsOptions));
app.use(requestId);
app.use(requestLogger);

/* Add all API routes here */

app.use(errorHandler);

const server = app.listen(API_PORT, async () => {
  await connectToDatabase();
  console.info(`✨ Server running in ${env.NODE_ENV} mode on PORT ${API_PORT}`);
});

export default server;
