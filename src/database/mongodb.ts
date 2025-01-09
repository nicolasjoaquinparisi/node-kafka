import { set, connect } from "mongoose";
import { env } from "@/config/env";

const { DATABASE_URL } = env;

set("strictQuery", false);

export const connectToDatabase = async () => {
  try {
    await connect(DATABASE_URL);
    console.info(`✨ Connected to database`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
