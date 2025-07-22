import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; //use to get the cookie from browser of user and set the cookie from server.
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// these are configuration
// use method is used in middleware and cors
app.use(express.json({ limit: "16kb" })); // excepting json
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // when data come from url so this line make express understand.
app.use(express.static("public")); // public assests use to store pdf file or anything file to store.
app.use(cookieParser());
export { app };
