const express = require("express");
const app = express();
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const errorMiddleware = require("./middleware/error");

// config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// config;

// dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route Imports

const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");
const payment = require("./routes/PaymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../frontEnd/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontEnd/build/index.html"));
});

//Middleware for error

app.use(errorMiddleware);

module.exports = app;
