const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const pokemon = require("./Pokemon/PokemonController");

const app = express();
const port = 4000;

// Adicione o middleware bodyParser para analisar o corpo da solicitação como JSON
app.use(bodyParser.json());

// Configuração básica do CORS
app.use(cors());

// Rotas do seu aplicativo, por exemplo, a rota "/pokemon"
app.use("/pokemon", pokemon);

app.listen(port, () => {
  console.log(`Este App está funcionando na porta ${port}`);
});
