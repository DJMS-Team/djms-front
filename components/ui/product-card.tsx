'use client'
import Image from "next/image"
import { Product } from "../../interfaces/product.interface"

interface ProductCard {
    data: Product
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-squeare rounded-xl bg-gray-100 relative">
                <Image
                src={data?.photo_url?.[0]}
                fill
                alt="Image"
                className="aspect-square object-cover rounded-md"></Image>
            </div>
            <div>
                <p className="font-semibold text-lg">
                    {data.product_name}
                </p>
                <p className="font-semibold text-lg">
                    {data.price}
                </p>
            </div>
        </div>
    )
}