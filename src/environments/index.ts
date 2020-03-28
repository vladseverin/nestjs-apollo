import * as dotenv from 'dotenv';
dotenv.config();

// environment
export const NODE_ENV: string = process.env.NODE_ENV || 'development';

// db connection
export const DB_CONNECTION_HOST: string = process.env.DB_CONNECTION_HOST;
export const DB_CONNECTION_PORT: number = Number(
  process.env.DB_CONNECTION_PORT,
);
export const DB_CONNECTION_USERNAME: string =
  process.env.DB_CONNECTION_USERNAME;
export const DB_CONNECTION_PASSWORD: string =
  process.env.DB_CONNECTION_PASSWORD;
export const DB_CONNECTION_DATABASE: string =
  process.env.DB_CONNECTION_DATABASE;
