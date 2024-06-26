"use client"
import React, { useEffect, useState } from 'react';
import { Container, Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import ProductCard from '@/components/profile/productCard';
import { userApi } from '@/APIS';
import { Product } from '@/interfaces/product';
import { useRouter } from 'next/navigation';
import styles from '../../../../components/navbar.module.css';

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
            
        }

        fetchData();
    },[params.id])

    const onAddProduct = () =>{
        router.push(`/account/${params.id}/products/add_product`)
    }

    return (
        <Container maxWidth="md" sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <h3 className="font-bold text-3xl">Mis productos</h3>
            <Button variant="contained" className={`${styles.primaryBtn}`} sx={{textTransform: 'none'}} onClick={onAddProduct}>Añadir</Button>
          </Box>
          {product?.map((product,index) => (
            
            <Grid container spacing={2} key={index}>
            <Grid item xs={12}>
              <ProductCard products = {product}  user = {params.id}/>
            </Grid>
          </Grid>
          
          ))}
          
        </Container>
      );
}

export default ProductPage