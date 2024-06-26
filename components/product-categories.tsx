import { useState } from "react";
import styles from "./navbar.module.css";
import { clearFilteredProductsCookie, getProductsFiltered } from "@/cookies/filtered-products.cookies";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { IconSearch } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AiOutlineCaretDown } from "react-icons/ai";
import { ProductCategory } from "@/interfaces/product-category.interface";

interface ProductCategoriesProps {
    categories: ProductCategory[];
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({categories}) => {
    const router = useRouter();

    const handleCategoryClick = async (categoryF: string) => {
        const filter = { category: categoryF }
        filterProducts(filter);
    }   

    const filterProducts = async (filter: any) => {
        await getProductsFiltered(filter);
    
        const currentPath = window.location.pathname;
    
        if (!(currentPath === "/product/filter")) {
          router.push("/product/filter");
        }
    }

    return (
        <DropdownMenu>
                  <DropdownMenuTrigger className={`flex gap-2 items-center ${styles.navLink} text-white`}>
                    <p>Categorias</p>
                    <AiOutlineCaretDown size={12} className="mt-[1px]" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="px-4 bg-[#2A2A5A] text-white border-none">
                    {categories.map((category) => (
                      <DropdownMenuItem className={`${styles.navLink} cursor-pointer`} onClick={() => handleCategoryClick(category.category)} key={category.id}>
                        {category.category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
        </DropdownMenu>
    )
}