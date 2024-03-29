
import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./router/rootRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";


const app = express();
const logger = morgan("dev")


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended:true }));
app.use(session({
    secret:"Hello!",
    resave: true,
    saveUninitialized: true,
}))
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;

