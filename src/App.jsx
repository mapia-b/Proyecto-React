import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { createContext } from 'react'
import { CartProvider } from './context/CartContext'

export const CartContext = createContext()

function App() {

  const [cart, setCart] = useState ([]);
 
  return (
    <>
      <div>
      <CartContext.Provider value= {{cart, setCart}}>
          <BrowserRouter>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Aquí vas a econtrar los mejores productos para el hogar'} />} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de '} />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              </Routes>
            </CartProvider>
          </BrowserRouter>
        </CartContext.Provider>
      </div>

    </>
  )
}

export default App
