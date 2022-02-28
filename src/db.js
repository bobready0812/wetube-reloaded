import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
    useNewUrlParser: true, 
    useUnifiedTopology:true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log("DB Error", err));

const handleOpen = () => console.log("Connected to DB");
db.once("open", handleOpen);



