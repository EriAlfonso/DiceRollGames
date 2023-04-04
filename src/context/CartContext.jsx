import { createContext ,useState, useEffect } from "react";

export const CartDataContext = createContext();


const CartContext = ({children}) => {
// local storage saved cart
const [cart, setCart] = useState(() => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  return savedCart || [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  const addToCart= (game)=>{
    setCart([...cart,game])
  }

  const removeFromCart = (gameId) => {
    const newCart = cart.filter((game) => game.id !== gameId);
    setCart(newCart);
  };

  const cartTotal= ()=>{
    setCart({...cart,game})
  }

  const clearCart= ()=>{
    setCart([])
  }
  

  return (
    <CartDataContext.Provider value={{cart, setCart, removeFromCart, addToCart, clearCart, cartTotal}}>
      {children}
    </CartDataContext.Provider>
  )
}

export default CartContext