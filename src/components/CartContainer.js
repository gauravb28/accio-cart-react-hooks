import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import CartItem from './CartItem';
import {
  CircularProgress,
  Typography,
  LinearProgress,
  Grid,
  Chip,
  Button,
  useTheme,
} from '@mui/material';

const CartContainer = () => {
  const theme = useTheme();

  const { amount, total, loading, cartItems, clearCart } =
    useContext(CartContext);

  if (loading)
    return (
      <CircularProgress
        style={{ position: 'absolute', left: '50%', top: '50%' }}
      />
    );

  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        align="center"
        style={{ color: theme.palette.secondary.main }}
      >
        Your Cart
      </Typography>
      {amount === 0 && (
        <Typography paragraph gutterBottom align="center">
          has no items.
        </Typography>
      )}

      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}

      <LinearProgress variant="determinate" value={100} />

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        style={{ margin: '2rem 0' }}
      >
        <Grid item>
          <Typography variant="h5">Total</Typography>
        </Grid>
        <Grid item>
          <Chip
            label={total.toFixed(2)}
            sx={{
              bgcolor: (defaultTheme) => defaultTheme.palette.primary.main,
            }}
          />
        </Grid>
      </Grid>

      {amount > 0 && (
        <Grid container justifyContent="center">
          <Grid item>
            <Button variant="contained" onClick={clearCart}>
              Clear Cart
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CartContainer;
