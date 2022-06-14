const express = require("express");
require("dotenv").config();
require("./models/db");
const useRouter = require("./routes/user");

const User = require("./models/user");

const app = express();

var cors = require("cors");
app.use(cors());

app.use(express.json());

app.use(useRouter);

app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to backend" });
});

app.listen(8000, () => {
  console.log("port is listening");
});
