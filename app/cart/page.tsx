'use client'

import Container from "@/components/ui/container"
import { useCart } from "@/hooks/cart/use-cart"
import { useEffect, useState } from "react"
import { CartItem } from "./_components/cart-item"
import { Summary } from "./_components/summary"
import { Navbar } from "@/components/navbar";

const CartPage = () => {
    const cart = useCart()

    return (
        <>
        <Navbar />
        <div className="bg-[#F8F8F8]">
            <Container>
                <div className="px-4 py-24 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">
                        Carrito
                    </h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <p className="text-neutral-500">No hay nada en el carrito</p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        data={item} />
                                ))}
                            </ul>
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>    
        </>
    )
}

export default CartPage