"use client"

import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import PurchaseCard from '@/components/profile/purchaseCard';
import { Order } from '@/interfaces/order';
import { orderApi, userApi } from '@/APIS';
import { OrderDetail } from '@/interfaces/order_detail';
import Link from 'next/link';

    interface Props {
        params: { id: string }
    }


const RecordPage = ({params}: Props) =>{
    const [order, setOrder] = useState<Order[]>()
    const [orderDetail, setOrderDetail] = useState<OrderDetail[]>()
    const calculatePrice = (order:Order) : number =>{
      let quantity=0;
      let partial_price =0
      let partial_total = 0;
      //console.log(order)
      order.order_details.map((detail)=>{
          quantity = +detail.quantity
          partial_price = +detail.product.price;
          partial_total += quantity * partial_price
          //console.log("Esta es la cantidad " + quantity + " Este es el precio parcial " + partial_price)
      })



      return partial_total
    }

    useEffect(()=>{
        const fetchData  = async () =>{
            const res = await userApi.recievedOrders(params.id)
            console.log(res)
            setOrder(res)
            
        }

        fetchData();

    },[params.id])

    return (
        <Container maxWidth="md" sx={{ mt: -2 }}>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              Historial de compras
            </Typography>
            <Grid spacing={4} gap={5} className='mt-10 flex flex-wrap flex-'>
            {order?.map((order, index) => (
              <Link href={`/account/${params.id}/record/order_detail/${order.id}`} key={index}>
                <PurchaseCard
                    
                    title={`Order ${index + 1}`} // Ejemplo de título, podrías usar algo relevante del objeto Order
                    quantity={order.order_details.reduce((acc, detail) => acc + +detail.quantity, 0)} // Ejemplo de cantidad, podrías obtener esto de los detalles de la orden
                    price={calculatePrice(order)}
                    address={order.address.street} // Ejemplo de dirección, adaptado a tu estructura Address
                    status={order.status} // Estado de la orden
                />
              </Link>
                
            ))}
            </Grid>
          </Box>
        </Container>
      );
}

export default RecordPage