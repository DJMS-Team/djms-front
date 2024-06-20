'use client'
import Image from "next/image"
import { Product } from "../../interfaces/product.interface"
import IconButton from "./icon-button"
import {  Expand, ShoppingCart } from "lucide-react"
import Currency from "./currency"

interface ProductCard {
    data: Product
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {

    return (
          <div  className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 my-4 mx-2">
           <div className="aspect-sqare rounded-xl bg-gray-100 relative">
                {/* <Image
                  src={data.photo_url}
                  fill
                  alt="Image"
                  className="aspect-square object-cover rounded-md"
                /> */}
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex-gap-x-6 justify-center">
                        <IconButton 
                          onClick={() => {}}
                          icon = {<Expand size={20} className="text-gray-600" />}
                           />
                           <IconButton 
                          onClick={() => {}}
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
                <p className="font-semibold text-lg">
                <Currency value={data.price} />
                </p>
                </div>
           
        </div>
    )
}

export default ProductCard;