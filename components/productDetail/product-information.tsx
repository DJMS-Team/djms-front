'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PayMethodCard from "./pay-method-card";
import { Product } from "@/interfaces/product.interface";
import { useCart } from "@/hooks/cart/use-cart";
import { MouseEventHandler, useState } from "react";
import {useRouter} from 'next/navigation';
import { User } from "@/interfaces/user";
import { Address } from "@/interfaces/address";
import { Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select } from "@mui/material";
import { orderApi, productApi } from "@/APIS";
interface ProductInformationProps {
  product: Product | null;
  user: User | null;
  addresses: Address[] | undefined
}

const ProductInformation : React.FC<ProductInformationProps> = ({ product, user, addresses }) => {

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('');
    
  const cart = useCart()
  const router = useRouter()
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
     event?.stopPropagation()
     
     if (product) {
       cart.addItem(product);
     }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const handleConfirm = async () => {
    if(user && product){
      const order = await orderApi.createOrder('PENDING', new Date(), user?.id, 'bee0c58c-1503-4f3e-a8a8-a6d8a3cdcaa4', selectedValue )
      console.log(order)
      const res = await orderApi.createOrderDetail(1, order?.id,product?.id )
      window.location.href = `http://localhost:3001/paypal/create/${order?.id}`
      //await productApi.decrementProduct(product.id, 1)
      localStorage.removeItem('cart-storage')
      setOpen(false);
    }
  };
  
  const onBuyNow: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation()
    
    if (product) {
      cart.addItem(product);
    }
    router.push('/cart')
 }
 

  return (
    <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
      <div className="sticky top-16">
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{product?.product_name}</CardTitle>
            <p className="text-gray-600">Sold by: {product?.seller? product.seller.name : "Uknown"}</p>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${product?.price ? product.price : 0.0} USD</p>
            <p>Stock: {product?.quantity}</p>
          </CardContent>
          <CardFooter className="flex gap-5">
            <Button onClick={handleOpen}>Buy now</Button>
            <Button onClick={onAddToCart}>Add to cart</Button>
          </CardFooter>
          <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Selecciona la direccion a enviar</DialogTitle>
                <DialogContent>
                    <Select
                        value={selectedValue}
                        onChange={(e)=>setSelectedValue(e.target.value)}
                        fullWidth
                    >
                        {addresses?.map((address, index) => (
                            <MenuItem value={address.id} key={index}>{address.avenue}  {address.street} # {address.house_number}</MenuItem>
                        ))}
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancela
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Confirma
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
      </div>
    </div>
  );
};

export default ProductInformation;
