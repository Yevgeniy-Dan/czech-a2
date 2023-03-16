const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/error");

const app = express();

app.use(bodyParser.json());

app.use(cookieParser());
app.use(cors());

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build", "index.hmtl"));
  });
} else {
  app.get("/", (req, res) => res.send("Please set tot production"));
}

app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));
