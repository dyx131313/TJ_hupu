const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const api = require("./api");

const app = express();

require("dotenv").config();

const mongoConnectionURL = "mongodb://localhost:27017/";
const databaseName = "TJ_hupu";

mongoose.set("strictQuery", false);

mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "session-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/api", api);

const reactPath = path.resolve(__dirname, "..", "client", "dist");
app.use(express.static(reactPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(reactPath, "index.html"));
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (status === 500) {
    console.log("The server errored when processing a request!");
    console.log(err);
  }

  res.status(status);
  res.send({
    status: status,
    message: err.message,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
