import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import { Grid, Button, Typography } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CartItem = ({ item }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ marginBottom: '1.5rem' }}
    >
      <Grid item xs={6} md={4}>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <img src={item.img} alt={item.title} height="80" width="80" />
          </Grid>
          <Grid item>
            <Typography variant="h6">{item.title}</Typography>
            <Typography paragraph>${item.price}</Typography>
            <Button onClick={() => removeItem(item.id)}>
              <Typography variant="button">remove</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} md={2}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <ExpandLessIcon onClick={() => increment(item.id)} />
          </Grid>
          <Grid item>{item.amount}</Grid>
          <Grid item>
            <ExpandMoreIcon onClick={() => decrement(item.id)} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartItem;
