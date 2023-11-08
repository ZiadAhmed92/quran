import React from 'react'
import   { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Avatar, Box, IconButton, useTheme } from "@mui/material";
// @ts-ignore
import img from "../../img/1.jpg"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import "./Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <div id="home" className='header d-flex'>
<div className='d-flex w-25 h-25'>
{/* <img src={img} alt='img' className='img w-25  ' /> */}
<Avatar alt="Remy Sharp" src={img} />
<ul className='mt-2'>
        <li>
            <Link to="main">Home</Link>
        </li>
        <li>
            <Link to="photo">Photo</Link>
        </li>
        <li>
            <Link to="info">Information</Link>
        </li>
    </ul>
</div>

<Box flexGrow={1}/>
     <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlinedIcon style={{color:"yellow"}}/>
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlinedIcon />
        </IconButton>
      )}
    </div>
    </div>
  )
}

export default Header