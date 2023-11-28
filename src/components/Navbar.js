import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Badge,
  Switch,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const { amount } = useContext(CartContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Amazon
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  checked={isDarkMode}
                  onChange={() => setIsDarkMode(!isDarkMode)}
                />
              }
              label="Dark Mode"
            />
          </FormGroup>
          <Badge badgeContent={amount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
