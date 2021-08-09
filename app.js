const express = require("express");
const mongoose = require("mongoose");
const core = require("./middlewares/security");
const errorsHandler = require("./middlewares/errors");
const { port, mongoURL } = require("./config/env");
const ItemRoute = require("./routes/ItemRoutes");

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});


const app = express();
app.use(core);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/items", ItemRoute);

// app.use("/api/v1/blogs", BlogRoute);
// to deploy this project to heroku
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(errorsHandler);
app.listen(port, () => {
  console.log("/////////////////////////////////////");
  console.log("Server start with port: " + port);
  console.log("/////////////////////////////////////");
});