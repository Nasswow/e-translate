const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

//Start the server
const app = express();

//BodyParser middleware
app.use(express.json());

//DB Config
const db = config.get("mongoURI");

//Connect to mongoDB
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

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 6001;
app.listen(port, () => console.log(`Server started on port ${port}`));
