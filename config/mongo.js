//require mongoose module
var mongoose = require("mongoose");

//require database URL from properties file
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DATABASE;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const dbURL = `mongodb://${username}:${password}@${host}:${port}/${database}`;

//export this function and imported by app.js
module.exports = () => {
  mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", function () {
    console.log("Mongoose default connection is open to ", dbURL);
  });

  mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection has occured " + err + " error");
  });

  mongoose.connection.on("disconnected", function () {
    console.log("Mongoose default connection is disconnected");
  });

  process.on("SIGINT", function () {
    mongoose.connection.close(function () {
      console.log(
        "Mongoose default connection is disconnected due to application termination"
      );
      process.exit(0);
    });
  });
};
