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
import { getProductsFiltered } from "@/cookies/filtered-products.cookies"
import { useCategories } from "@/hooks/use-categories"

interface CategoryCardProps {
    data: ProductCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    data
}) => {
    const router = useRouter()
    const { handleCategoryClick } = useCategories({ router })

    return (
          <div  onClick ={() => handleCategoryClick(data.category)}className="bg-purple-900 cursor-pointer text-white group cursor-pointer rounded-xl border p-4 space-y-2 my-2 mx-2 scale-40 ">
            <div>
                <p className="font-semibold text-lg">
                    {data.category}
                </p>
            </div>
        </div>
    )
}

export default CategoryCard;