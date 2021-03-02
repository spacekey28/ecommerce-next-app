import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const addItemToCart = (id, qty = 1) => {
    const item = cart.find(i => i.id === id);

    if (item) {
      // increase qty
      item.qty += qty;
      setCart([...cart]);
    } else {
      setCart([...cart, { id, qty }]);
    }
  }

  const removeItemFromCarty = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);
  }
  return {
    cart,
    addItemToCart,
    removeItemFromCarty,
  };
};

export default useCart;