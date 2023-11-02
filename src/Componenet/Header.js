import React,{useState} from 'react'
import { AppBar,Box,IconButton,Toolbar,Typography } from '@mui/material'
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
import {Link} from '@mui/material';
import "../../src/Styles/HeaderStyle.css";
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    
  return (
    <>
    <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}>
            <Toolbar>
                <IconButton color="inherit" aria-label= "open drawer" edge="start" sx={{mr:2, display:{xs:"none",sm:"block"}}}>
                    <MenuIcon/>
                </IconButton>
            <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1}}>
                <FastfoodTwoToneIcon/>
                My Restaurant
                </Typography>
        
            <Box sx={{display:{xs:"none",sm:"block"}}}>
                <ul className='navigation-menu'>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li>
                        <Link to={"/menu"}>Menu</Link>
                    </li>
                </ul>
            </Box>
            </Toolbar>
            </AppBar>
    </Box>
    </>
  )
}

export default Header