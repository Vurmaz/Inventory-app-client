import React, {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Grid from '@mui/material/Grid'
import Cards from "./Cards"
import Box from '@mui/material/Box'
import Footer from "./Footer";
import { theme } from "../assets/theme"

export default function Category() {
    const { category } = useParams()
    const [itemData, setItemData] = useState([])
    
    const fetching = async() => {
        try{
            const { data } = await axios.get(`https://inventory-app-01.herokuapp.com/category/${category}`)
            setItemData(data.category)
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
            <Box sx={{ marginTop:'3rem' }}>
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
            </Box>
            <Footer />
        </>
    )
}