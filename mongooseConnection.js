const mongoose= require('mongoose')
const mongoURL = require('./config/env').mongoURL

mongoose.connect(
   mongoURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
  mongoose.connection.on("open", () => console.log("connected to mongoDB"));

  mongoose.connection.on("error", (err) => console.log(err.message));
  
  mongoose.connection.on("disconnected", () =>
    console.log("database disconnected")
  );