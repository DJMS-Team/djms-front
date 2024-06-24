"use client"
import { orderApi } from "@/APIS";
import { CardFooter } from "@/components/ui/card";
import { Order } from "@/interfaces/order";
import { Card, CardContent, CardHeader, CardMedia, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {Button, Rate} from "antd"


interface Props {
    params: { id:string,OrderId:string }
}

const OrderDetailPage = ({params}: Props) =>{

    const [order, setOrder] = useState<Order>()
    const [rate, setRate] = useState<number>()

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await orderApi.findOneOrders(params.OrderId);
            setOrder(res)
            console.log(res)
        }

        fetchData();
    },[])

    return(
        <Container className="mx-auto p-4">
            <div className="flex flex-col gap-4">
            {order?.order_details.map((order_detail)=>(
            <Card className="bg-white/99 shadow-md rounded-lg p-4 flex-col" key={order.status}>
                
                    <CardContent className="flex items-center">
                    <img
                        src={order_detail.product.photo_url}
                        alt="Producto"
                        className="w-11 h-11 rounded-full mr-4"
                    />
                    <div>
                        <Typography variant="h5">{order_detail.product.product_name}</Typography>
                    </div>
                    </CardContent>
                    <CardFooter>
                        <Rate 
                        style={{color : "#2A2A5A"}} 
                        allowHalf
                        onChange={(value) =>{
                            setRate(value);
                        }}
                        />
                        <Button>Hacer review</Button>
                    </CardFooter>
                
            </Card>
            ))}
            <Card className="bg-white/50 shadow-md rounded-lg p-4">
                <CardHeader title= {
                    <h5>La orden con Fecha {order?.date.toString()} fue entregada</h5>
                }>
                    
                </CardHeader>
                <CardContent>
                    
                    Este es el detalle de la orden
                </CardContent>
            </Card>
            {/* Puedes agregar más Cards aquí */}
            </div>
        </Container>
    );
}

export default OrderDetailPage