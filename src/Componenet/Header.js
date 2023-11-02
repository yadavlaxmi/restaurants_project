import React from 'react'
import { AppBar,Box,Toolbar,Typography } from '@mui/material'
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
import {Link} from '@mui/material';
const Header = () => {
  return (
    <>
    <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}>
            <Toolbar>
            <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1}}>
                <FastfoodTwoToneIcon/>
                My Restaurant
                </Typography>
        
            <Box>
                <ul>
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