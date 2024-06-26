"use client";
import Image from "next/image";
import { Product } from "../../interfaces/product.interface";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { toast } from "react-hot-toast";
import { MouseEventHandler } from "react";
import { useCart } from "@/hooks/cart/use-cart";

import { useRouter } from "next/navigation";
import { getProductById } from "@/actions/get-product";
import { ProductCategory } from "@/interfaces/product-category.interface";
import { getProductsFiltered } from "@/cookies/filtered-products.cookies";
import { useCategories } from "@/hooks/use-categories";

interface CategoryCardProps {
  data: ProductCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  const router = useRouter();
  const { handleCategoryClick } = useCategories({ router });

  return (
    <div
      onClick={() => handleCategoryClick(data.category)}
      className="w-[140px] h-[140px] border-[#bebee8] border rounded-full flex items-center justify-center cursor-pointer  font-bold bg-[#bebee8] hover:bg-[#1C1C3C] hover:text-white transition-all duration-300 ease-in-out"
    >
      {data.category}
    </div>
  );
};

export default CategoryCard;
