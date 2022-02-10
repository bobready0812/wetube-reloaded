import express from "express";

 const PORT = 4000;
 const app = express();

 const gossipMiddleware = (req, res, next) => {
     console.log(`someone is going to: ${req.url}`);
     next();
 }

 const handleHome = (req, res, next) => {
     return res.send("good middleware");
 }
 app.get("/", gossipMiddleware, handleHome );


const handleListening = () => console.log("Server");

 app.listen(PORT, handleListening);