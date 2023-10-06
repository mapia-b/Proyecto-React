import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartWidget  from './components/CartWidget/CarWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <CartWidget/>
        <ItemListContainer greeting={'Aquí vas a econtrar los mejores productos para el hogar'}/>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
