// console.log("Hey, Aylin");

const express = require("express");
const app = express();
const port = 5500;

app.get("/", function (req, res) {
  res.send("GET request to homepage");
});

// res.sendFile('<file-name>', {root: __dirname});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
