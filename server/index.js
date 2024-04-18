const express = require("express");
require("dotenv").config();
const app = express();
const port = 4545;

app.use(express.json());
app.use("/", express.static("build"));

app.get("/", function (req, res) {
  res.render("build/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
