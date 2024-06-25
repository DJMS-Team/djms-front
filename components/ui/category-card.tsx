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
import { ProductCategory } from "@/interfaces/product-category.interface"

interface CategoryCard {
    data: Product;
}

const CategoryCard: React.FC<CategoryCard> = ({
    data
}) => {


    const cart = useCart()

    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/filter`)
    }

    return (
          <div  onClick ={handleClick}className="bg-purple-900 cursor-pointer text-white group cursor-pointer rounded-xl border p-4 space-y-2 my-2 mx-2 scale-40 ">
          
            <div>
                <p className="font-semibold text-lg">
                {data.product_category.category}
                </p>
                
            </div>
            
           
        </div>
    )
}

export default CategoryCard;