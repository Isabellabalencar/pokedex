const repository = require("./PokemonRepository");

exports.getAll = function () {
  return repository.getAll();
};

exports.create = function (pokemon) {
  return repository.create(pokemon);
};

exports.update = function (pokemon) {
  return repository.update(pokemon);
};

exports.delete = function (pokemon_id) {
  return repository.delete(pokemon_id);
};
