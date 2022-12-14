import * as React from "react";
import * as ReactDOM from "react-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Navigate } from "react-router-dom";
import { Container } from "@mui/system";

const drawerWidth = 240;

export function HomePage(props) {


  return (
    <Container>
      <Typography variant="h1">Packt Publishing Demo</Typography>
      <Link to="/book" >
      <Typography variant="h3">Search Books</Typography>
      </Link>
    </Container>

  );
}