const express = require("express");
const axios = require("axios");
const cors = require("cors");

const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.static("./public"));

app.get("/pokemonPic/:pokemonNumber", (req, res) => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemonNumber}`)
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
})

app.listen(PORT, console.log(`Server running on port ${PORT}`));
