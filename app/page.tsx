import Container from "../components/ui/container";
import { Billboard } from "../components/billboard";
import { getProducts } from "../actions/get-products";
import ProductList from "@/components/product-list";
import { Navbar } from "../components/navbar";
import CategoryCard from "@/components/ui/category-card";
import Categories from "@/components/categories";
import { getCategories } from "@/actions/get-categories";
import { useState, useEffect } from "react";
import { ProductCategory } from "@/interfaces/product-category.interface";
import RenderModel from "@/components/RenderModel";
import Computer from "@/components/models/computer";

const Home = async () => {
  const products = await getProducts(1, 50, "ASC");
  const categories = await getCategories();

  return (
    <div>
      <Navbar />
      <div className="bg-[#F8F8F8] w-full">
        <div className="py-12">
        
          <Billboard
            title="Los mejores productos"
            subtitle="Productos tecnológicos especializados en computadoras de escritorio"
            btnText="Ver productos"
            photoUrl="https://images.unsplash.com/photo-1495954222046-2c427ecb546d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          
        </div>
      
        <div className="flex space-y-10 flex-col gap-y-8 px-4 sm:px-6 lg:px-36 ">
          <Categories
          title="Categorías"
          items={categories}
          />
            <div className="w-full h-full">
                        <RenderModel children={undefined} className={undefined}>
                            <Computer/>
                        </RenderModel>
                    </div>
          <ProductList
            title="Productos disponibles"
            items={products.products || []} 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;