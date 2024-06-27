"use client";
import { orderApi, resourceApi } from "@/APIS";
import { CardFooter } from "@/components/ui/card";
import { Order } from "@/interfaces/order";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
  Button,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OrderHistory } from "@/components/order-status";
import Image from "next/image";
import styles from "../../../../../../components/navbar.module.css";

interface Props {
  params: { id: string; OrderId: string };
}

const OrderDetailPage = ({ params }: Props) => {
  const router = useRouter();
  const [order, setOrder] = useState<Order>();
  const [ratings, setRatings] = useState<{ [key: string]: number | null }>({});
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await orderApi.findOneOrders(params.OrderId);
      setOrder(res);
      console.log(res);
    };

    fetchData();
  }, [params.OrderId]);

  const onGiveReview = async (product_id: string) => {
    if (ratings[product_id]) {
      const res = await resourceApi.createReview(
        ratings[product_id]!,
        comment,
        params.id,
        product_id
      );
      console.log(res);
      router.push(`/account/${params.id}`);
    }
  };

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
    setRatings((prevRatings) => ({
      ...prevRatings,
      [product_id]: newValue,
    }));
  };
  if (!order) {
    if (!order) {
      return (
        <Typography variant="h6" className="text-center mt-4">
          Cargando...
        </Typography>
      );
    }
  }

  return (
    <Container maxWidth="md" className="mx-auto p-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-3xl">Detalles de orden</h3>
        <Button
          variant="contained"
          className={`${styles.secondaryBtn}`}
          sx={{ textTransform: "none" }}
          onClick={() => router.back()}
        >
          Volver
        </Button>
      </div>
      <div className="flex flex-col gap-4 flex-wrap mt-5">
        {order?.order_details.map((order_detail) => (
          <Card
            className="bg-white shadow-sm rounded-lg p-4 flex flex-col gap-4 "
            key={order_detail.product.id}
          >
            <CardContent className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={order_detail.product.photo_url[0]}
                  alt="Producto"
                  className="rounded-md"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="h5" className="font-semibold">
                  {order_detail.product.product_name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Cantidad: {order_detail.quantity}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Precio: $ {order_detail.product.price}
                </Typography>
                <Rating
                  value={ratings[order_detail.product.id] || 0}
                  style={{ color: "#2A2A5A" }}
                  precision={0.25}
                  onChange={(event, newValue) =>
                    handleRatingChange(order_detail.product.id, newValue)
                  }
                />
                <button
                  className={`${styles.secondaryBtn} w-full py-1 px-4`}
                  onClick={() => handleOpen(order_detail.product.id)}
                >
                  Hacer reseña
                </button>
              </div>
            </CardContent>
            <Dialog
              open={open && selectedProductId === order_detail.product.id}
              onClose={handleClose}
            >
              <DialogTitle>
                Haga un comentario a su reseña (opcional)
              </DialogTitle>
              <DialogContent>
                <TextField
                  fullWidth
                  margin="dense"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  className={`${styles.primaryBtn} ml-auto text-white px-6 mt-2 mr-2`}
                  sx={{ textTransform: "none" }}
                  onClick={() => {
                    onGiveReview(order_detail.product.id);
                    handleClose();
                  }}
                >
                  Confirmar
                </Button>
                <Button
                  className={`${styles.secondaryBtn} ml-auto text-white px-6 mt-2`}
                  sx={{ textTransform: "none" }}
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
              </DialogActions>
            </Dialog>
          </Card>
        ))}
        <OrderHistory order={order} />
      </div>
    </Container>
  );
};

export default OrderDetailPage;
