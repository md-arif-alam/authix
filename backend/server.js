const app = require("./app");

const cloudinary = require("cloudinary");
// const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// This should already be declared in your API file
// var app = express();

// ADD THIS
var cors = require("cors");
app.use(cors());

// Handling uncaught Error

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to uncaught exception`);
  process.exit(1);
});

// config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// dotenv.config({ path: "backend/config/config.env" });

// Connecting to database

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// UnHandle promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due unhandle Promise rejection `);
  server.close(() => {
    process.exit(1);
  });
});
