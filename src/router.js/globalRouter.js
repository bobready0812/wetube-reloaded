import express from "express";
import { trending } from "../controllers/userControllers";
import { join } from "../controllers/videoController";


const globalRouter = express.Router();



globalRouter.get("/", trending);
globalRouter.get("/join", join);


export default globalRouter;