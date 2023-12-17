const model = require("./PokemonModel");

exports.getAll = function () {
  return model.findAll();
};

exports.create = function (pokemon) {
  return model.create(pokemon);
};

exports.update = function (pokemon) {
  return model.update(pokemon, {
    where: { pokemon_id: pokemon.pokemon_id },
  });
};

exports.delete = function (pokemon_id) {
  return model.destroy({
    where: { pokemon_id: pokemon_id },
  });
};
