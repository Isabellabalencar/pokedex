const express = require("express");

const router = express.Router();

const service = require("./PokemonService");

router.get("/", (req, res) => {
  service.getAll().then((pokemon) => {
    res.send(pokemon);
  });
});

router.post("/", (req, res) => {
  service.create(req.body).then((pokemon) => {
    res.send(pokemon);
  });
});

router.put("/", (req, res) => {
  service.update(req.body).then((pokemon) => {
    res.send(pokemon);
  });
});

router.delete("/:pokemon_id", (req, res) => {
  service.delete(req.params.pokemon_id).then((pokemon) => {
    res.send(pokemon);
  });
});

module.exports = router;
