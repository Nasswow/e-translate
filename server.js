const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
// const words = require("./routes/api/words");
//Start the server
const app = express();

//BODY PARSER MIDDLEWARE
app.use(express.json());

//DB CONFIG
const db = config.get("mongoURI");

//CONNECT TO MONGO
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
app.use("/api/words", require("./routes/api/words"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

//Serve static assets if in application
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Server started on port ${port}`));
