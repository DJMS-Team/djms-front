'use client'

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import Currency from "@/components/ui/currency"
import { Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select } from '@mui/material';
import { useCart } from "@/hooks/cart/use-cart"
import { toast } from "react-hot-toast"
import { useCurrentUser } from "@/hooks/auth/useCurrentUser"
import { orderApi, userApi } from "@/APIS"
import Cookies from "js-cookie";
import { Address } from "@/interfaces/address"
import { OrderApi } from "@/APIS/order.api"

const SummaryContent = () => {
    
    const searchParams = useSearchParams()
    const items = useCart((state) => state.items)
    const removeAll = useCart((state) => state.removeAll)
    const [user, setUser] = useState<any | null>()

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [Addreses, setAdresses] = useState<Address[]>();

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success('Order placed successfully')
            removeAll()
        }

        if (searchParams.get('cancelled')) {
            toast.error('Order cancelled')
        }
        
    }, [searchParams, removeAll])

    useEffect(()=>{
        const fetchData = async () =>{
            const currentUser = Cookies.get("currentUser");
            if (currentUser) {
              setUser(JSON.parse(currentUser));
             // console.log(JSON.parse(currentUser)?.id)
              const res = await userApi.findOneUser(JSON.parse(currentUser)?.id)
              setAdresses(res?.addresses)
              //console.log(res)
            }
        }

        fetchData();
    },[])

    const totalPrice = items.reduce((acc, item) => {
        return acc + Number(item.price)
    }, 0)

    const onCheckout = async () =>{
        //const order = await orderApi.createOrder('PENDING', new Date(),user.id, )
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //const handleSelectChange = (event) => {
        //setSelectedValue(event.target.value);
    //};

    const handleConfirm = async () => {
        
        const order = await orderApi.createOrder('PENDING', new Date(),user.id, 'bee0c58c-1503-4f3e-a8a8-a6d8a3cdcaa4', selectedValue )
        console.log(order)
        items.map((item)=>{
            const res = orderApi.createOrderDetail(item.quantity, order?.id, item.id)
            console.log(res)
        })
        window.location.href = `http://localhost:3001/paypal/create/${order?.id}`
        localStorage.removeItem('cart-storage')
        setOpen(false);
        
    };

    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">
                Order Summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order Total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button className="w-full mt-6" onClick={handleOpen}>
                Checkout
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Selecciona la direccion a enviar</DialogTitle>
                <DialogContent>
                    <Select
                        value={selectedValue}
                        onChange={(e)=>setSelectedValue(e.target.value)}
                        fullWidth
                    >
                        {Addreses?.map((address, index) => (
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
        </div>
    )
}

export const Summary = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SummaryContent />
        </Suspense>
    )
}
