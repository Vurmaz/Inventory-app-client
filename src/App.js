import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SharedComponents from './components/SharedComponents';
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './assets/theme'
import Shop from './components/Shop';
import CreateProduct from './components/CreateProduct';
import Edit from './components/Edit';
import Delete from './components/Delete'
import Categories from './components/Categories';
import Category from './components/Category'

function App() {
  return (
    <ThemeProvider theme={theme}> 
    <Routes>
      <Route path='/' element={<SharedComponents />}>
        <Route index element={<Shop />} />
        <Route path='create' element={<CreateProduct />} />
        <Route path=':_id' element={<Edit />}/>
        <Route path=':_id/delete' element={<Delete />} />
        <Route path='category' element={<Categories />} />
        <Route path='category/:category' element={<Category />} />
      </Route>
    </Routes>      
    </ThemeProvider>

  );
}

export default App;
