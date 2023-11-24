import React, { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa6';
import CartContext from '../context/cart/CartContext';

const Navbar = () => {
  const { amount } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="nav-brand">Amazon</div>
      <div className="nav-icons">
        <FaCartPlus />
        <div className="total-amount">{amount}</div>
      </div>
    </nav>
  );
};

export default Navbar;
