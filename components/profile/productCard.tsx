import React from 'react';
import { Container, Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { Product } from '@/interfaces/product';
import { productApi } from '@/APIS';
import { useRouter } from 'next/navigation';

const ProductCard = (product: Product) => {
    const router = useRouter();

    const onDelete= async() =>{
        await productApi.deleteProduct(product.id)
    }

  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={product.photo_url}
        alt="Pad Mouse Gaming"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {product.product_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            $ {product.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>
            Editar
          </Button>
          <Button variant="contained" className='bg-red-500' onClick={onDelete}>
            Eliminar
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard