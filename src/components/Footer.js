import React from "react";
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <Box sx={{

        }}>
            <footer>
                <AppBar sx={{ flexGrow:'1', position:'static' }}>
                    <Toolbar sx={{ display:'flex', gap:'2rem' ,justifyContent:'center'}}>
                        <Typography variant="h5">Created By Vurmaz</Typography>
                        <a href='https://github.com/Vurmaz' >
                            <GitHubIcon 
                                sx={{ 
                                    color:'black', 
                                    fontSize:'3rem',
                                    transition:'all 500ms ease-in-out',
                                    cursor:'pointer',
                                    color:'black',
                                    '&:hover': {
                                        color:'white',
                                        transform:'scale(1.1)'
                                    }
                                }} 
                            />
                        </a>
                        
                    </Toolbar>
                </AppBar>
            </footer>
        </Box>
    )
    
}