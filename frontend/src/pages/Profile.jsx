import { Chip, Container, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar/navbar_profile";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemonData) {
      navigate("/");
    }
  }, [navigate, pokemonData]);

  if (!pokemonData) {
    return null;
  }

  const { name, image_url, pokemon_id, } = pokemonData;

  return (
    <>
      <NavBar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" p={5}>
            <Typography variant="h4">{name}</Typography>
            
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              marginBottom="15px"
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box component="img" src={image_url} width="50%" height="100%" alt={name} />
              
              {/* Passa um array contendo apenas o pokemonData atual */}
              <PokemonTable pokemonData={[pokemonData]} />
              
            </Box>
            <Box width="100%">
             
              
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
