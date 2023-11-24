import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import CartItem from './CartItem';

const CartContainer = () => {
  const { amount, total, loading, cartItems, clearCart } =
    useContext(CartContext);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {amount === 0 && <p>has no items.</p>}

      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}

      <hr />

      <div className="cart-total">
        <p>Total</p>
        <p>{total.toFixed(2)}</p>
      </div>

      <div className="clear-cart">
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartContainer;
