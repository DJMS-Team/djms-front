"use client"
import { orderApi, resourceApi } from "@/APIS";
import { CardFooter } from "@/components/ui/card";
import { Order } from "@/interfaces/order";
import { Card, CardContent, CardHeader, CardMedia, Container, Typography, Button, Rating, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


interface Props {
    params: { id:string, OrderId:string }
}

const OrderDetailPage = ({params}: Props) => {
    //Console.log puta vida
    const router = useRouter();
    const [order, setOrder] = useState<Order>()
    const [ratings, setRatings] = useState<{ [key: string]: number | null }>({})
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState<string | null>(null);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await orderApi.findOneOrders(params.OrderId);
            setOrder(res)
            console.log(res)
        }

        fetchData();
    }, [])

    const onGiveReview = async (product_id: string) => {
        if (ratings[product_id]) {
            const res = await resourceApi.createReview(ratings[product_id]!, comment, params.id, product_id);
            console.log(res);
            router.push(`/account/${params.id}`)
        }
    }

    const handleOpen = (product_id: string) => {
        setSelectedProductId(product_id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setComment(null);
        setSelectedProductId(null);
    };

    const handleRatingChange = (product_id: string, newValue: number | null) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [product_id]: newValue
        }));
    }

    return (
        <Container className="mx-auto p-4">
            <div className="flex flex-col gap-4">

                {order?.order_details.map((order_detail) => (
                    <Card className="bg-white/99 shadow-md rounded-lg p-4 flex-col" key={order_detail.product.id}>
                        <CardContent className="flex items-center">
                            <img
                                src={order_detail.product.photo_url[0]}
                                alt="Producto"
                                className="w-11 h-11 rounded-full mr-4"
                            />
                            <div>
                                <Typography variant="h5">{order_detail.product.product_name}</Typography>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Rating
                                value={ratings[order_detail.product.id] || 0}
                                style={{ color: "#2A2A5A" }}
                                precision={0.25}
                                onChange={(event, newValue) => handleRatingChange(order_detail.product.id, newValue)}
                            />
                        </CardFooter>
                        <Button className="flex-col" onClick={() => handleOpen(order_detail.product.id)}>Hacer reseña</Button>
                        <Dialog open={open && selectedProductId === order_detail.product.id} onClose={handleClose}>
                            <DialogTitle> <h6>Haga un comentario a su reseña (opcional)</h6> </DialogTitle>
                            <DialogContent>
                                <TextField
                                    fullWidth
                                    margin="dense"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="secondary">
                                    Cancelar
                                </Button>
                                <Button onClick={() => {
                                    onGiveReview(order_detail.product.id);
                                    handleClose();
                                }} color="primary">
                                    Confirmar
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Card>
                ))}
            </div>
        </Container>
    );
}

export default OrderDetailPage
