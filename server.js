const express = require("express");
const axios = require("axios");
const cors = require("cors");

const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.static("./public"));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
