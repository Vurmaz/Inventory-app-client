import React from "react";
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { theme } from "../assets/theme";
import { Link } from "react-router-dom";

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    
    const handleClose = () => {
        setAnchorEl(null)
    }

    return(
        <>
        <Box sx={{ flexGrow:1 }}>
            <AppBar position="static"> 
                <Toolbar>
                    <Grid 
                        container 
                        spacing={2} 
                        sx={{
                            [theme.breakpoints.up('sm')]: {paddingInline:'4rem'}
                        }}
                    >
                        <Grid 
                            item 
                            xs={6}
                            sx={{ display:'flex', alignItems:'center'}}
                        >
                            <Typography 
                                color={theme.palette.secondary.main}
                                variant="h3"
                                component={Link}
                                to='/'
                                sx={{
                                    textDecoration:'none',
                                }}
                            >
                                Fruitier
                            </Typography>
                        </Grid>
                        <Grid 
                            item 
                            xs={6} 
                            display='flex' 
                            justifyContent='flex-end' 
                            sx={{
                                [theme.breakpoints.up('sm')]:{display:'none'}
                            }}>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon color="success" fontSize="large" />
                            </Button>
                            <Menu
                                id='menu'
                                anchorEl={anchorEl}
                                open={open} 
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}

                            >
                            <MenuItem component={Link} to='/' sx={{bgcolor:theme.palette.primary.main}} onClick={handleClose}>Home</MenuItem>
                            <MenuItem component={Link} to='/create' onClick={handleClose}>Add Product</MenuItem>  
                            <MenuItem component={Link} to='/category' onClick={handleClose}>Category</MenuItem>                          
                            </Menu>      
                        </Grid>
                        <Grid 
                            item 
                            sm={6}
                            display='flex'
                            alignItems='center'
                            sx={{
                                [theme.breakpoints.down('sm')]:{display:'none'},
                            }}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={4} display='flex' justifyContent='center'>
                                    <Button 
                                        component={Link} 
                                        to='/' 
                                        sx={{
                                            color:theme.palette.secondary.main,
                                            transition:'color 400ms ease',
                                            '&:hover':{
                                                color:'white'
                                            }
                                        }}
                                        >
                                            Home
                                    </Button>    
                                </Grid>
                                <Grid item xs={4} display='flex' justifyContent='center'>
                                    <Button 
                                        component={Link} 
                                        to='/create' 
                                        sx={{
                                            color:theme.palette.secondary.main,
                                            transition:'color 400ms ease',
                                            '&:hover':{
                                                color:'white'
                                            },
                                            textAlign:'center'
                                        }}
                                        >
                                            Add Product
                                    </Button> 
                                </Grid>
                                <Grid item xs={4} display='flex' justifyContent='center'>
                                    <Button 
                                        component={Link} 
                                        to='/category' 
                                        sx={{
                                            color:theme.palette.secondary.main,
                                            transition:'color 400ms ease',
                                            '&:hover':{
                                                color:'white'
                                            }
                                        }}
                                        >
                                            Category
                                    </Button> 
                                </Grid>                       
                            </Grid>

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}