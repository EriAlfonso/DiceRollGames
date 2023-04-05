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

const addToCart = (game) => {
  // function para que los items se sumen y no se repitan
  const gameInCart = cart.find((item) => item.id === game.id);
  if (gameInCart) {
    const updatedCart = cart.map((item) =>
      item.id === game.id ? { ...item, buyTotal: item.buyTotal + game.buyTotal} : item
    );
    setCart(updatedCart);
  } else {
    setCart([...cart,game])
  }
};

  const removeFromCart = (gameId) => {
    const newCart = cart.filter((game) => game.id !== gameId);
    setCart(newCart);
  };

  const cartPriceTotal= ()=>{
    return cart.reduce((total, game) => total + (game.price * game.buyTotal), 0);
  }

  const clearCart= ()=>{
    setCart([])
  }
  

  return (
    <CartDataContext.Provider value={{cart, setCart, removeFromCart, addToCart, clearCart, cartPriceTotal}}>
      {children}
    </CartDataContext.Provider>
  )
}

export default CartContext