import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <CartWidget />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Aquí vas a econtrar los mejores productos para el hogar'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Distintas categorías de productos'} />} />
            {/* <Route path='/item/:itemId' element={<ItemDetailContainer />}/> */}
          </Routes>
        </BrowserRouter>
      </div>
      <p className="read-the-docs">

      </p>
    </>
  )
}

export default App
