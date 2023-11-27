import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import CartProvider from './context/cart/CartProvider';
import { Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <CartProvider>
      <CssBaseline />
      <Navbar />
      <Container maxWidth={'lg'} style={{ padding: '2rem 0' }}>
        <CartContainer />
      </Container>
    </CartProvider>
  );
}

export default App;
