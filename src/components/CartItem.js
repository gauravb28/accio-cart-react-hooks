import React, { useContext } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import CartContext from '../context/cart/CartContext';

const CartItem = ({ item }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.img} alt={item.title} height="80" width="80" />
      </div>
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <button onClick={() => removeItem(item.id)}>remove</button>
      </div>
      <div className="item-amount">
        <FaChevronUp onClick={() => increment(item.id)} />
        <p>{item.amount}</p>
        <FaChevronDown onClick={() => decrement(item.id)} />
      </div>
    </div>
  );
};

export default CartItem;
