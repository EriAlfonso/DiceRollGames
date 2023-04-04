import { createContext ,useState } from "react";

export const CartDataContext = createContext();


const CartContext = ({children}) => {
  const [cart, setCart] = useState([])

  const addToCart= (game)=>{
    setCart({...cart,game})
  }

  const removeFromCart= (id)=>{
    setCart({...cart,game})
  }

  const cartTotal= ()=>{
    setCart({...cart,game})
  }

  const clearCart= ()=>{
    setCart([])
  }
  

  return (
    <CartDataContext.Provider value={{cart,setCart,addToCart}}>
      {children}
    </CartDataContext.Provider>
  )
}

export default CartContext