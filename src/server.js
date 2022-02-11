import express from "express";
import logger from "morgan";

 const PORT = 4000;
 const app = express();

 

 const handleHome = (req, res, next) => {
     return res.send("good middleware");
 }




 app.use(logger("tiny"));
 app.get("/", handleHome);



const handleListening = () => console.log("Server");

 app.listen(PORT, handleListening);