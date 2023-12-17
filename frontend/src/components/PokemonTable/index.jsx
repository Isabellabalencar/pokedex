import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { typeHandler } from "../../pokemonType";


export default function PokemonTable({ pokemonData }) {
  return (
    <TableContainer component={Paper} sx={{ height: "fit-content", maxWidth: "250px", boxShadow: "none" }}>
      <Table aria-label="a dense table">
        <TableBody>
          {pokemonData.map((pokemon) => (
            <React.Fragment key={pokemon.pokemon_id}>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>Tipo</TableCell>
                <TableCell>{typeHandler(pokemon.types)}</TableCell>
              </TableRow>

              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>ID</TableCell>
                <TableCell>{pokemon.pokemon_id}</TableCell>
              </TableRow>

              {pokemon.evolution !== "none" && (
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>Evolución</TableCell>
                  <TableCell>{pokemon.evolution}</TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
