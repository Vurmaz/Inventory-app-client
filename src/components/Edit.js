import React, { useEffect, useState } from "react"
import axios from "axios"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'
import Typography from "@mui/material/Typography"
import Footer from "./Footer";
import { useParams } from "react-router-dom"


export default function Edit() {
    const [itemData, setItemData] = useState('')
    const { _id } = useParams()
    const password = 'edit'
    const [adminPass, setAdminPass] = useState('')
    const [isTrue, setIsTrue] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const changeData = (event) => {
        const name = event.target.name
        const value = event.target.value
        setItemData({...itemData, [name] : value})
    }
    const submitForm = async(event) => {
        event.preventDefault()
        if(adminPass !== password){
            setIsTrue(true)
            return
        }
        setIsTrue(false)
        try{
            await axios.patch(`https://inventory-app-01.herokuapp.com/shop/${_id}`, itemData)
            window.location.href ='/'
        }
        catch(error) {
            setErrorMsg(error.response.data.msg)
            
        }
    }
    const fetching = async() => {
        try{
            const { data } = await axios.get(`https://inventory-app-01.herokuapp.com/shop/${_id}`)
            setItemData(data.item)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetching()
    }, [])
    
    return(
        <>
        <Typography variant='h3' textAlign='center' marginTop='2rem'>Update The Product</Typography>
            <Box 
                component='form'
                onSubmit={submitForm}
                sx={{ 
                    flexGrow:1,
                    marginTop:'2rem', 
                    gap:'1.5rem',
                    display:'flex',
                    flexDirection:'column',
                    width:'70%',
                    marginInline:'auto',
                    marginBottom:'2rem'
                }}>
                <TextField 
                    name="name"
                    label='Name'
                    variant="filled"
                    value={itemData.name || ''}
                    onChange={(event) => changeData(event)}
                />
                <TextField 
                    name='price'
                    label='Price'
                    variant='filled'
                    value={itemData.price || ''}
                    onChange={(event) => changeData(event)}
                />
                <TextField 
                    name='numberInStock'
                    label='Number in stock'
                    variant="filled"
                    value={itemData.numberInStock || ''}
                    onChange={(event) => changeData(event)}
                />
                <TextField 
                    name='URL'
                    label='URL'
                    variant="filled"
                    value={itemData.URL || ''}
                    onChange={(event) => changeData(event)}
                />
                <FormControl fullWidth>
                    <InputLabel id="select">Category</InputLabel>
                    <Select
                        variant="filled"
                        labelId="select"
                        id="simple-select"
                        name='category'
                        value={itemData.category || ''}
                        label="Age"
                        onChange={(event) => changeData(event)}
                    >
                        <MenuItem value='Fruit'>Fruit</MenuItem>
                        <MenuItem value='Vegetables'>Vegetables</MenuItem>
                    </Select>
                </FormControl>
                <TextField 
                    variant='filled'
                    name='adminPass'
                    value={adminPass}
                    onChange={(event) => setAdminPass(event.target.value)}
                    label='Admin Password'
                    type='password'
                />
                {
                    isTrue && 
                    <Typography  
                        marginTop='-0.5rem'
                        variant='p' 
                        color='red' 
                        textAlign='center'
                        className="fade"
                    >
                        Incorrect Password
                    </Typography>
                }
                {
                    errorMsg &&
                    <Typography variant='caption' color='red'>{errorMsg}</Typography>
                }
                <Button type="submit" variant="contained">Update</Button>
            </Box>
            <Footer />
        </>
           
    )
}