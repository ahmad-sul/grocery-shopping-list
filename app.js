const express = require("express");
const mongoose = require("mongoose");
const core = require("./middlewares/security");
const errorsHandler = require("./middlewares/errors");
const { port, mongoURL } = require("./config/env");
const cors = require('cors')
const ItemRoute = require("./routes/ItemRoutes");

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});


const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/items", ItemRoute);
// app.use("/api/v1/blogs", BlogRoute);

app.use(errorsHandler);
app.listen(port, () => {
  console.log("/////////////////////////////////////");
  console.log("Server start with port: " + port);
  console.log("/////////////////////////////////////");
});