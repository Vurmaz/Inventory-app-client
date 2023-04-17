import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Footer from "./Footer";
import { theme } from '../assets/theme';

export default function Create() {
    const password = 'create'
    const [adminPass, setAdminPass] = useState('')
    const [isTrue, setIsTrue] = useState(false)
    const [inputs, setInputs] = useState({name:'', category:'', price:'', numberInStock:'', URL:''})
    const [errorText, setErrorText] = useState(null)

    const changeInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs({...inputs, [name] : value})
    }
    const handleClick = async(event) => {
        event.preventDefault()
        if(adminPass !== password){
            setIsTrue(true)
            return
        }
        setIsTrue(false)
        try{
            await axios.post('https://inventory-app-01.herokuapp.com/shop', inputs)
            window.location.href ='/'
        }
        catch(error){
            setErrorText(error.response.data.msg)
        }
        
    }
    return(
        <>
            <Box
                component='form'
                sx={{
                    margin:'0 auto',
                    display:'flex',
                    flexDirection:'column',
                    width:'500px',
                    gap:'2rem',
                    marginTop:'2rem',
                    marginBottom:'3rem',
                    [theme.breakpoints.down('sm')]:{
                        width:'90%'
                    }

                }}
            >
                <Typography sx={{textAlign:'center'}} variant='h4' color={theme.palette.secondary.main}>Add Product</Typography>
                <TextField
                    name='name'
                    label='Name'
                    color='secondary'
                    value={inputs.name}
                    onChange={(event) => changeInput(event)}
                />
                <TextField
                    name='category'
                    label='Category'
                    color='secondary'
                    value={inputs.category}
                    onChange={(event) => changeInput(event)}
                />
                <TextField
                    name='price'
                    label='Price'
                    color='secondary'
                    value={inputs.price}
                    onChange={(event) => changeInput(event)}                    
                />
                <TextField
                    name='numberInStock'
                    label='Number in Stock'
                    color='secondary'
                    value={inputs.numberInStock}
                    onChange={(event) => changeInput(event)}                                        
                />
                <TextField
                    name='URL'
                    label='URL'
                    color='secondary'
                    value={inputs.URL}
                    onChange={(event) => changeInput(event)}
                />
                <TextField 
                    name='password'
                    label='Admin password'
                    color='secondary'
                    value={adminPass}
                    onChange={(event) => setAdminPass(event.target.value)}

                />

                {
                    errorText &&
                    <Typography variant='caption' color='red'>{errorText}</Typography>
                }
                {
                    isTrue &&
                    <Typography variant='p' color='red'>Incorrect Password</Typography>    
                }
                <Button onClick={(event) => handleClick(event)} variant='contained'>Add</Button>
            </Box>
            <Footer />
        </>
    )
}