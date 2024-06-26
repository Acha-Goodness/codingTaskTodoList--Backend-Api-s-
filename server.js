const mongoose = require("mongoose");
const dotenv = require("dotenv");

// HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException", err => {
    console.log("UNCAUGHT EXCEPTION! shutting down...");
    console.log(err);
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: "./config.env"});
const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB)
.then(() => {
    console.log("DB connection sucessful");
}).catch(err => {
    console.log(err);
});

// LISTEN TO PORT
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// HANDLING UNHANDLED REJECTION
process.on("unhandledRejection", err => {
    console.log("UNHANDLED REJECTION! shutting down...");
    console.log(err);
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});