import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";


export default function NavBar({ pokemonFilter, hideSearch }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
        
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box component="img" src="/assets/pokemon-logo.png" height="3em" sx={{ cursor: "pointer" }} onClick={() => navigate("/")} />
            <Box component="img" src="/assets/back.png" height="3em" sx={{ cursor: "pointer" }} onClick={() => navigate("/")} />
          </Box>
          
           
        </Toolbar>
      </AppBar>
    </Box>
  );
}
