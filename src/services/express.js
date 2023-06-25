const express = require("express");
const morgan = require("morgan");

const config = require("../config");
const apiRouter = require("../routes/api");
const errorHandler = require("../middlewares/errorHandler");
const scheduledFunctions = require("../middlewares/shedule");
const cors = require('cors')
const authJwt = require('../middlewares/jwt')
const FileStreamRotator = require('file-stream-rotator');
const fs = require('fs');
const path = require('path');
const app = express();


const logDirectory = path.join(__dirname, 'log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = FileStreamRotator.getStream({
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily', // Rotate daily
  verbose: false,
});



app.use(morgan('combined', { stream: accessLogStream }));

app.use(morgan("tiny"),); //logger
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(function (req, res, next) {
  console.log("Logged");
  next();
});

app.get("/", (req, res) => {
  return res.json({ message: "Hello" });
});
app.use("/publications", apiRouter);

scheduledFunctions.initScheduledJobs();

app.use(errorHandler.handleError);
app.use(authJwt())
exports.start = () => {
  app.listen(config.port, (err) => {
    if (err) {
      console.log("Error: ${err}");
      process.exit(-1);
    }
    console.log("Backend Service is working at port", config.port);
  });
};

