"use client"
import React, { useEffect, useState } from 'react';
import { Container, Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import ProductCard from '@/components/profile/productCard';
import { userApi } from '@/APIS';
import { Product } from '@/interfaces/product';
import { useRouter } from 'next/navigation';

interface Props {
    params: { id: string }
}

const ProductPage = ({params}:Props) => {

    const [product, setProduct]= useState<Product[]>()
    const router = useRouter();

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await userApi.findOneUser(params.id)
            setProduct(res.products)
            console.log(res.products)
        }

        fetchData();
    },[params.id])

    const onAddProduct = () =>{
        router.push(`/account/${params.id}/products/add_product`)
    }

    return (
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h4">Mis productos</Typography>
            <Button variant="contained" color="primary" onClick={onAddProduct}>Añadir</Button>
          </Box>
          {product?.map((product,index) => (
            <Grid container spacing={2} key={index}>
            <Grid item xs={12}>
              <ProductCard {...product} />
            </Grid>
          </Grid>
          ))}
          
        </Container>
      );
}

export default ProductPage