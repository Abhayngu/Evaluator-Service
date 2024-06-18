import dotenv from "dotenv";
dotenv.config();
export default {
  PORT: Number(process.env.PORT),
  REDIS_PORT: Number(process.env.REDIS_PORT),
  REDIS_HOST: process.env.REDIS_HOST,
};

// 1:05:13
