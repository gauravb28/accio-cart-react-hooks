import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import CartProvider from './context/cart/CartProvider';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { green, lightGreen } from '@mui/material/colors';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...(!isDarkMode
        ? {
            primary: {
              main: green[500],
              light: green[300],
              dark: green[700],
            },
            secondary: {
              main: '#d11d8b',
              contrastText: '#fff',
              light: '#e02d9b',
              dark: '#b30e73',
            },
          }
        : {
            primary: lightGreen,
            secondary: {
              main: '#e6a3cc',
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <CssBaseline />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Container maxWidth={'lg'} style={{ padding: '2rem 0' }}>
          <CartContainer />
        </Container>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
