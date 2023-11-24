import React, { useEffect, useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const res = await fetch(
          'https://course-api.com/react-useReducer-cart-project'
        );
        const data = await res.json();
        setCartItems(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getCartItems();
  }, []);

  useEffect(() => {
    const calculateTotals = () => {
      let cartTotal = 0,
        cartAmount = 0;
      cartItems.forEach((cartItem) => {
        cartTotal += +cartItem.price * cartItem.amount;
        cartAmount += cartItem.amount;
      });
      setTotal(cartTotal);
      setAmount(cartAmount);
    };

    calculateTotals();
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increment = (id) => {
    let item = cartItems.find((item) => item.id === id);
    item.amount++;
    setCartItems((cartItems) => {
      return cartItems.map((cartItem) =>
        cartItem.id === id ? item : cartItem
      );
    });
  };

  const decrement = (id) => {
    let item = cartItems.find((item) => item.id === id);
    item.amount--;
    if (item.amount === 0) {
      removeItem(id);
      return;
    }
    setCartItems((cartItems) => {
      return cartItems.map((cartItem) =>
        cartItem.id === id ? item : cartItem
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        amount,
        total,
        loading,
        clearCart,
        removeItem,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
