import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import Grid from '@mui/material/Grid'
import { theme } from "../assets/theme";
import Footer from "./Footer";

export default function Shop() {

    const [itemData, setItemData] = useState([])

    const fetching = async() => {
        try{
            const { data } = await axios.get('https://inventory-app-01.herokuapp.com/shop')
            setItemData(data.items)
        }
        catch(err){
            console.log(err)
        }

    }
    useEffect(() => {
        fetching()
    }, [])

    return(
        <>
        <Grid  
            container 
            spacing={2}
            sx={{
                marginTop:'2rem',
                marginBottom:'2rem',
                marginInline:'auto',
                display:'flex',
                justifyContent:'center'
            }}
        >
            {
                itemData.map((item) => {
                    return(
                        <Grid 
                            key={item._id} 
                            item 
                            xs={12} 
                            sm={6} 
                            md={4}
                            sx={{
                                display:'flex',
                                justifyContent:'center',
                                [theme.breakpoints.down('sm')]:{justifyContent:'initial'}
                            }}
                        >
                          <Cards  {...item} /> 
                        </Grid> 
                    )
                })
            }
        </Grid>
        <Footer />
        </>
    )
}