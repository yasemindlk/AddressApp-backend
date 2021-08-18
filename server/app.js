import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import "core-js/stable";
import "regenerator-runtime/runtime";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import authRouter from "./routes/auth";

import connect from "./config/database";
import seedUser from "./seed/user";

connect();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../public")));

seedUser();
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

export default app;
