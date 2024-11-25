const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const { Db, DBRef } = require("mongodb");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes")

//middlewares
app.use(express.json());



//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)



//Connect Database
dbConnect();





//server listen
const port = process.env.PORT || 7002;
app.listen(port, () => {
    console.log(`Server listening on port : ${port}`)
})