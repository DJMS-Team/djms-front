import { useState } from "react";
import styles from "./navbar.module.css";
import { clearFilteredProductsCookie, getProductsFiltered } from "@/cookies/filtered-products.cookies";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { IconSearch } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AiOutlineCaretDown } from "react-icons/ai";
import { ProductCategory } from "@/interfaces/product-category.interface";
import { useCategories } from "@/hooks/use-categories";

interface ProductCategoriesProps {
    categories: ProductCategory[];
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({categories}) => {
    const router = useRouter();
    const { handleCategoryClick } = useCategories({ router })

    return (
        <DropdownMenu>
                  <DropdownMenuTrigger className={`flex gap-2 items-center ${styles.navLink} text-white`}>
                    <p>Categorias</p>
                    <AiOutlineCaretDown size={12} className="mt-[1px]" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="px-4 bg-[#2A2A5A] text-white border-none">
                    {categories.map((category) => (
                      <DropdownMenuItem onClick={() => handleCategoryClick(category.category)} key={category.id}>
                        {category.category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
        </DropdownMenu>
    )
}