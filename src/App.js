import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import CartProvider from './context/cart/CartProvider';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <CartContainer />
    </CartProvider>
  );
}

export default App;
