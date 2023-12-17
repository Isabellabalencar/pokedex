import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Skeletons } from "../components/Skeletons";

export const Home = ({ setPokemonData }) => {
  const [originalPokemons, setOriginalPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemonsFromServer();
  }, []);

  const getPokemonsFromServer = async () => {
    try {
      const response = await axios.get("http://localhost:4000/pokemon");
      setOriginalPokemons(response.data);
      setPokemons(response.data);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  };

  const pokemonFilter = (name) => {
    try {
      if (name === "") {
        // Se o nome estiver vazio, restaurar a lista original
        setPokemons(originalPokemons);
      } else {
        // Se houver um nome, filtrar com base no nome
        const filteredPokemons = originalPokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(name.toLowerCase())
        );
        setPokemons(filteredPokemons);
      }
    } catch (error) {
      console.error("Error filtering pokemons:", error);
    }
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/profile");
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <Box onClick={() => pokemonPickHandler(pokemon)}>
                  <PokemonCard
                    name={pokemon.name}
                    image={pokemon.image_url}
                    types={pokemon.types}
                    pokemon_id={pokemon.pokemon_id}
                    evolution={pokemon.evolution}
                  />
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};
