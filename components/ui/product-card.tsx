'use client'
import Image from "next/image"
import { Product } from "../../interfaces/product.interface"
import IconButton from "./icon-button"
import {  Expand, ShoppingCart } from "lucide-react"
import Currency from "./currency"
import { toast } from 'react-hot-toast'
import { MouseEventHandler } from "react"
import { useCart } from "@/hooks/cart/use-cart"

import { useRouter } from "next/navigation"
import { getProductById } from "@/actions/get-product"
import { usePreviewModal } from "@/hooks/cart/use-preview-modal"

interface ProductCard {
    data: Product
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {


    const cart = useCart()

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = async (event) => {
       event?.stopPropagation()

       const product = cart.items.find((item) => item.id == data.id);
        
        if (product) {
            if (Number(data.quantity) - product.quantity > 0) {
                cart.addItem(data);
            } else {
                toast.error('There is not enough stock')
            }
        } else {
            cart.addItem(data);
        }
    }

    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const previewModal = usePreviewModal()

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        
        previewModal.onOpen(data)
    }


    return (
          <div  onClick ={handleClick}className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 my-4 mx-2 scale-90 hover:scale-100 transition-all ease-out">
           <div className="aspect-square rounded-xl bg-gray-100 relative">

                 <Image
                  src={data.photo_url}
                  fill
                  alt="Image"
                  className="aspect-square object-cover rounded-md"

                /> 
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex-gap-x-6 justify-center">
                        <IconButton 
                          onClick={onPreview}
                          icon = {<Expand size={20} className="text-gray-600" />}
                           />
                           <IconButton 
                          onClick={onAddToCart}
                          icon = {<ShoppingCart size={20} className="text-gray-600" />}
                           />
                    </div>
                </div>
            </div> 
            <div>
                <p className="font-semibold text-lg">
                {data.product_name}
                </p>
                
            </div>
            <div className="flex items-center justify-between"> 
                <Currency value={data.price} />
            </div>
           
        </div>
    )
}

export default ProductCard;