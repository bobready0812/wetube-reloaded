import express from "express";

 const PORT = 4000;
 const app = express();

 const logger = (req, res, next) => {
     console.log(`${req.url} ${req.method}`);
     next();
 }

 const handleHome = (req, res, next) => {
     return res.send("good middleware");
 }





 app.get("/", logger, handleHome);



const handleListening = () => console.log("Server");

 app.listen(PORT, handleListening);