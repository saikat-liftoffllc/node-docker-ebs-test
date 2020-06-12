"use strict";

const express = require("express");

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST || "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World From Branch feature/eb-branch-test");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
