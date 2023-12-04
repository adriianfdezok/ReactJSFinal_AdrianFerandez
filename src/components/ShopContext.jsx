import React, { useContext, createContext } from 'react';
import { useState } from 'react';
export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);




export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);




 const addCarrito = (item) => {
    const indexProduct = cart.findIndex((prod) => prod.id === item.id);
    if (indexProduct === -1) {
      setCart([...cart, item]);
    } else {
      const inCart = cart[indexProduct].quantity;
      cart[indexProduct].quantity = inCart + item.quantity;
      setCart([...cart]);
    }
  };






  const PriceFinal = () => {
    return cart.reduce((acumular, ProductoObjeto) => (acumular += ProductoObjeto.costo  * ProductoObjeto.quantity), 0);
  };




  const TotalsProducts = () => {
    const totalQuantity = cart.reduce((accumulator, productObject) => (accumulator += productObject.quantity), 0);
  
     const formattedTotal = totalQuantity.toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
  
    return formattedTotal;
  };
  

  const bgCounts = () => {
    return cart.reduce((acumular, ProductoObjeto) => (acumular += ProductoObjeto.quantity), 0);
  };
  



  const removeProduct = (id) => {
    setCart(cart.filter((cartItem) => cartItem.id !== id));
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCarrito,
        removeProduct,
        deleteCart,
        PriceFinal,
        TotalsProducts,
        bgCounts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
