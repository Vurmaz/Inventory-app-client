import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from '@mui/material/Box'
import Footer from "./Footer";
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Delete() {
    const password = 'delete'
    const [isTrue, setIsTrue] = useState(false)
    const [adminPass, setAdminPass] = useState('')
    const { _id } = useParams()

    const deleteProduct = async() => {
        if(password !== adminPass){
            setIsTrue(true)
            return
        }   
        try{
            await axios.delete(`https://inventory-app-01.herokuapp.com/shop/${_id}`)   
        }
        catch(error){
            console.log(error)
        }
        
    }

    return(
        <>
            <Typography variant="h2" textAlign='center' marginTop='2rem'>Delete Product</Typography>
            <Box 
                sx={{
                    flexGrow:1,
                    display:'flex',
                    flexDirection:'column',
                    width:'70%',
                    marginInline:'auto',
                    marginTop:'4rem',
                    marginBottom:'20rem'

                }}>
                    <TextField
                        name='password'
                        label='Admin password'
                        variant="filled"
                        type='password'
                        value={adminPass}
                        onChange={((event) => setAdminPass(event.target.value))}
                    />
                    <Button onClick={deleteProduct} sx={{marginTop:'1.5rem'}} variant="contained">Delete</Button>
                    {
                        isTrue && 
                        <Typography 
                            variant='h6' 
                            textAlign='center' 
                            marginTop='1.5rem' 
                            color='red'
                            >
                            Incorrect Password
                        </Typography>
                    }
            </Box>
            <Footer />
        </>
    )
}