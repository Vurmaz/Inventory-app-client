import React, {useState, useEffect} from "react"
import axios from "axios"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Footer from "./Footer";
import { theme } from "../assets/theme";

export default function Categories() {

    const [fruit, setFruit] = useState('')
    const [vegetables, setVegetables] = useState('')

    const fetching = async() => {
        try{
            const { data } = await axios.get(`https://inventory-app-01.herokuapp.com/shop`)
            setFruit(data.items.filter((item) => item.category === 'Fruit')[0])
            setVegetables(data.items.filter((item) => item.category === 'Vegetables')[0])
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        fetching()
    }, [])

    return(
        <CssBaseline>
            <Container>
                <Grid 
                    container
                    spacing={2} 
                    sx={{
                        display:'flex', 
                        justifyContent:'center', 
                        marginInline:'auto',
                        marginTop:'5rem',
                        marginBottom:'5rem'
                    }}>
                    <Grid item xs={12} md={6}>
                        <Card 
                            onClick={() => window.location.href ='/category/Fruit'}
                            sx={{ 
                                maxWidth:400, 
                                '&:hover':{transform:'scale(1.1)'}, 
                                transition:'transform 700ms ease-in-out',
                                [theme.breakpoints.down('sm')]:{maxWidth:300}, 
                                cursor:'pointer',
                                bgcolor:theme.palette.primary.main,
                                boxShadow: '0px 0px 13px 0px rgba(205,194,174,1)'                          
                            }}>
                            <CardMedia
                                component='img'
                                height={370}
                                image={fruit.URL}
                                alt={fruit.name}

                            />
                            <CardContent>
                                <Typography textAlign='center' variant='h4'>{fruit.category}s</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card 
                            onClick={() => window.location.href ='/category/Vegetables'}
                            sx={{ 
                                maxWidth:400, 
                                '&:hover':{transform:'scale(1.1)'}, 
                                transition:'transform 700ms ease-in-out',
                                [theme.breakpoints.down('sm')]:{maxWidth:300},
                                cursor:'pointer',
                                bgcolor:theme.palette.primary.main,
                                boxShadow: '0px 0px 13px 0px rgba(205,194,174,1)'

                            }}>
                            <CardMedia
                                component='img'
                                height={370}
                                image={vegetables.URL}
                                alt={vegetables.name}

                            />
                            <CardContent>
                                <Typography textAlign='center' variant='h4'>{vegetables.category}s</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </CssBaseline>
        
    )
}