import express from "express";

 const PORT = 4000;
 const app = express();

 app.get("/", (req, res) => {
 return res.send("I still love you");
}
 )
 app.get("/login", (req,res) => {
     return res.send("Login");
 })


const handleListening = () => console.log("Server");

 app.listen(PORT, handleListening);