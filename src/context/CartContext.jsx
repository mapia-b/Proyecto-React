import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: () => {}, 
    inCart: () => {},
    removeItem: () => {},
    clearCart: () => {},
    totalQuantity: 0,
    total: 0
})

//creo la funcion que contiene toda la logica del carrito de compras
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

       //si el producto que quiero agregar ya esta agregado
       const inCart = (id) => {
        return cart.some(prod => prod.id === id)
      }
  
    //agregar producto al carrito
    // const addItem = (productToAdd) => {
    //   if(!inCart(productToAdd.id)) {
    //     setCart(prev => [...prev, productToAdd])
    //   } else {
    //     console.log('OK! Ya esta agregado el producto')
    //   }
    // }
    const addItem = (productToAdd) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.id === productToAdd.id);
    
          if (existingItem) {
            // Si el producto ya existe en el carrito, actualiza su cantidad
            return prevCart.map((item) =>
              item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            // Si el producto no existe en el carrito, agrégalo con cantidad 1
            return [...prevCart, { ...productToAdd, quantity: 1 }];
            
          }
        });
      };
    
  
    //borrar un producto
    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    //dejar el carrito en 0 productos
    const clearCart = () => {
        setCart([])
    }

    //mostrar la cantidad total de productos
    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity || 0
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

  //calcular el precio total
    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += (prod.price ||0) * (prod.quantity ||0)
        })

        return total
    }

    const total = getTotal()

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, inCart, totalQuantity, total }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
