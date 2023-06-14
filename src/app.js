import cookieParser from "cookie-parser";
import express from "express";
import handlebars from "express-handlebars";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import config from "./env.js";
import { configurePassport } from "./config/passport.config.js";
import authRouter from "./routes/auth.route.js";
import coursesRouter from "./routes/courses.route.js";
import usersRouter from "./routes/users.route.js";
import viewsRouter from "./routes/views.route.js";
import fileDirName from "./utils.js";
import customResponseMiddleware from "./middlewares/custom-response.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const { PORT, MONGO_URL, SESSION_SECRET } = config;
const { __dirname } = fileDirName(import.meta);

const app = express();

/**mongoose */
const connection = mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/**Handlebars */
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(customResponseMiddleware);
configurePassport();

/**Middlewares */

app.use(cookieParser());
app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

/**Routes */
app.use("/", viewsRouter);
app.use("/api/users", usersRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/auth", authRouter);

app.use(errorMiddleware);

app.listen(PORT);
