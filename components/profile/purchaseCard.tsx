import React from 'react';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

interface Info {
    title:string,
    quantity: number,
    price: number,
    address: string,
    status:string
}

const PurchaseCard = ({ title, quantity, price, address, status }: Info) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar style={{ backgroundColor: '#3f51b5' }}>
              <ShoppingCartIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Cant: {quantity} &nbsp; $ {price.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="textSecondary">{address}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{ color: '#3f51b5', fontWeight: 'bold' }}>
                {status}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PurchaseCard;
