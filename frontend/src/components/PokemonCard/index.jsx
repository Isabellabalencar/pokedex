import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { typeHandler } from "../../pokemonType";

export default function PokemonCard({ name, image, types, pokemon_id, evolution }) {
  return (
    <Card sx={{ maxWidth: 345, height:320 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            ID: {pokemon_id}
          </Typography>
          {evolution !== "none" && (
            <Typography variant="body2" color="textSecondary">
              Evolución de: {evolution}
            </Typography>
          )}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" color="textSecondary">
              Tipo: {typeHandler(types)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
