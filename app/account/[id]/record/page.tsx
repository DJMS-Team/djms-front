"use client"

import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import PurchaseCard from '@/components/profile/purchaseCard';
import { Order } from '@/interfaces/order';
import { orderApi, userApi } from '@/APIS';
import { OrderDetail } from '@/interfaces/order_detail';
import { OrderApi } from '@/APIS/order.api';
const mockData = [
    {
      title: "Pad Mouse Gaming",
      quantity: 4,
      price: 70000,
      address: "Calle 4ta # 14-102",
      card: "4319 5312 0215 1289",
      status: "Finalizado"
    },
    {
        title: "Pad Mouse Gaming",
        quantity: 4,
        price: 70000,
        address: "Calle 4ta # 14-102",
        card: "4319 5312 0215 1289",
        status: "Finalizado"
    },
    {
        title: "Pad Mouse Gaming",
        quantity: 4,
        price: 70000,
        address: "Calle 4ta # 14-102",
        card: "4319 5312 0215 1289",
        status: "Finalizado"
    },
    {
        title: "Pad Mouse Gaming",
        quantity: 4,
        price: 70000,
        address: "Calle 4ta # 14-102",
        card: "4319 5312 0215 1289",
        status: "Finalizado"
    },
    // Agrega más objetos si quieres más items en el historial
  ];

    interface Props {
        params: { id: string }
    }


const RecordPage = ({params}: Props) =>{
    const [order, setOrder] = useState<Order[]>()
    const [orderDetail, setOrderDetail] = useState<OrderDetail[]>()
    const calculatePrice = (order:Order) : number =>{
      let quantity=0;
      let partial_price =0
      order.order_details.map((detail)=>{
          quantity += detail.quantity
          partial_price += detail.product.price;
      })



      return quantity*partial_price
    }

    useEffect(()=>{
        const fetchData  = async () =>{
            const res = await userApi.recievedOrders(params.id)
            console.log(res)
            setOrder(res)
            
        }

        fetchData();

    },[])

    return (
        <Container>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              Historial de compras
            </Typography>
            <Grid container spacing={4}>
            {order?.map((order, index) => (
                <PurchaseCard
                    key={index}
                    title={`Order ${index + 1}`} // Ejemplo de título, podrías usar algo relevante del objeto Order
                    quantity={order.order_details.reduce((acc, detail) => acc + detail.quantity, 0)} // Ejemplo de cantidad, podrías obtener esto de los detalles de la orden
                    price={calculatePrice(order)}
                    address={order.address.street} // Ejemplo de dirección, adaptado a tu estructura Address
                    status={order.status} // Estado de la orden
                />
            ))}
            </Grid>
          </Box>
        </Container>
      );
}

export default RecordPage