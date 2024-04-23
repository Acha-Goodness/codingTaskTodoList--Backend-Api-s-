const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const todoRouter = require("./Routes/todoRoutes")

const app = express();
app.use(express.json());

// IMPLEMENT CORS
app.use(cors());
app.options("*", cors());

// CHECKING FOR CURRENT ENVIROMENT
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
    console.log("My application is currently on", process.env.NODE_ENV);
}

// ENDPOINT ROUTING BY MOUNTING e.g mounting the router
app.use("/api/v1/todo", todoRouter);

module.exports = app;