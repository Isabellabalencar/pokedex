const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:1603@localhost:5432/pokemon",
  {
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);

const pokemon = sequelize.define("pokemon", {
  pokemon_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    
  },
  name: { type: Sequelize.STRING },
  types: { type: Sequelize.ARRAY(Sequelize.STRING) },
  image_url: { type: Sequelize.STRING },
  evolution: { type: Sequelize.STRING, allowNull: true },
});

module.exports = pokemon;
