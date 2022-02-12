import express from "express";
import morgan from "morgan";
import globalRouter from "./router.js/globalRouter";
import userRouter from "./router.js/userRouter";
import videoRouter from "./router.js/videoRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev")
app.use(logger);


















app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



const handleListening = () => console.log("Server");

app.listen(PORT, handleListening);