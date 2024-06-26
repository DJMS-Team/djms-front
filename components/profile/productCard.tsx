import React from 'react';
import { Container, Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { Product } from '@/interfaces/product';
import { productApi } from '@/APIS';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface productProps {
  products : Product,
  user:string
}

const ProductCard = (props: productProps) => {
    const router = useRouter();

    const onDelete= async() =>{
        await productApi.deleteProduct(props.products.id)
    }

  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={props.products.photo_url[0]}
        alt="Pad Mouse Gaming"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {props.products.product_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            $ {props.products.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>
            Editar
          </Button>
          <Button variant="contained" className='bg-red-500' onClick={onDelete} sx={{ mr: 1 }}>
            Eliminar
          </Button>
          <Button variant="contained" style={{background : '#2a2a5a'}}>
          <Link
              href= {`/account/${props.user}/products/questions_section/${props.products.id}`}
            >
            Ver preguntas
          </Link>
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard