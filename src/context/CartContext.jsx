import { createContext ,useState } from "react";

export const CartDataContext = createContext();


const CartContext = ({children}) => {
  const [cart, setCart] = useState([])

  const addCart= (game)=>{
    setCart({...cart,game})
  }
  

  return (
    <CartDataContext.Provider value={{cart,setCart}}>
      {children}
    </CartDataContext.Provider>
  )
}

export default CartContext