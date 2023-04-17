
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LazyLoad from 'react-lazy-load';
import { theme } from "../assets/theme";
import { Link } from "react-router-dom";

export default function Cards({_id, name, category, price, numberInStock, URL}) {
    return(
        <>
        
            <Card 
                sx={{ 
                    maxWidth:345,
                    backgroundColor:theme.palette.third.main,
                    boxShadow: '0px 0px 13px 0px rgba(205,194,174,1)'
                }}>
                <LazyLoad>
                <CardMedia
                    component="img"
                    height="250"
                    image={URL}
                    alt={name}
                    sx={{
                        [theme.breakpoints.down('sm')]:{height:200}
                    }}

                />
                </LazyLoad>
                <CardContent>
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="p">{category}</Typography>
                    <Typography variant="h6">{price}$</Typography>
                    <Button 
                        component={Link} 
                        to={`/${_id}`}  
                        variant="contained" 
                        sx={{
                            color:'white', 
                            bgcolor:theme.palette.secondary.main
                        }}>
                            Edit
                        </Button>
                    <Button 
                        component={Link}
                        to={`/${_id}/delete`} 
                        variant="contained" 
                        sx={{
                            color:'white', 
                            bgcolor:'red'
                        }}>
                            Delete
                        </Button>  
                </CardContent>
                
                    
                

            </Card>
        </>
    )
}
