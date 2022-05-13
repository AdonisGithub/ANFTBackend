import express from "express";
import cors from "cors";
//import utils
import HttpException from "@utils/HttpException.utils";
//import error middleware
import errorMiddleware from "@middleware/errorMiddleware";

//import user router
import jsonRouter from "@routes/json.route";
const fileUpload = require("express-fileupload");
// ###
// Init express
const app = express();

const dotenv = require("dotenv");
dotenv.config();
app.use(fileUpload());
app.use(express.static("public"));
// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// enabling cors for all requests by using cors middleware
app.use(cors());
app.use(express.json());
// Enable pre-flight
app.options("*", cors());

app.use("/json", jsonRouter);
app.use("/upload", express.static("upload"));

app.all("*", (req, res, next) => {
  const error = new HttpException(404, "Endpoint Not Found.");
  next(error);
});
// Error middleware
app.use(errorMiddleware);
// set port, listen for requests
app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
/***********************************Export*******************************************/
export default app;
