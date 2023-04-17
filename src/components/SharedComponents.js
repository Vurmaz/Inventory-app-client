
import React from "react";
import Header from "./Header";
import { Outlet } from 'react-router-dom'

export default function SharedComponents() {
    return(
        <>
        <header>
          <Header />  
        </header>
        
            <Outlet />
        </>
    )
}
