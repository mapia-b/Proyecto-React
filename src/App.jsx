import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);
  const { category } = useParams ();
 
  return (
    <>
      <div>
       
        <BrowserRouter>
        <NavBar />
            <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Aquí vas a econtrar los mejores productos para el hogar'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={category} />} />
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
