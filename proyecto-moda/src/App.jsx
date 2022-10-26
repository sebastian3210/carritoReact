import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './App.css'
import NavBar from './componentes/NavBar/navBar'
import Carrito from './componentes/Pages/CarritoPages/carrito'
import ItemDetailConteiner from './componentes/Pages/itemDetailConteiner/itemDetailConteiner'
import ItemListConteiner from './componentes/Pages/itemListConteiner/itemListConteiner'
import React from 'react'
import NotFound404 from './componentes/NotFound404/NotFound404'
import CartContextoProvider from './cartContext/cartContext'
//import Carrito from './componentes/Pages/CarritoPages/carrito'
//import ItemDetailConteiner from './componentes/Pages/itemDetailConteiner/itemDetailConteiner'
//import ItemListConteiner from './componentes/Pages/itemDetailConteiner/itemListConteiner/itemListConteiner'


function App() {
  


  return (
    
    <div className="App">
      <CartContextoProvider>
      
        <BrowserRouter>
          <NavBar />
          <Routes>          
               <Route path='/' element={<ItemListConteiner />}  />
               <Route path='/categoria/remera' element={<ItemListConteiner />}  />
               <Route path='/categoria/buzos' element={<ItemListConteiner />}  />
               <Route path='/categoria/pantalones' element={<ItemListConteiner />}  />
               <Route path='/detalle' element={<ItemDetailConteiner />}  />
               <Route path='cart' element={<Carrito />}  />
               <Route path='/404' element={<NotFound404 />}/>

               <Route path='*' element={<Navigate to ='/404' />}/>
          </Routes>
        </BrowserRouter>
      </CartContextoProvider>
    </div>

    
  )

 
}


export default App
