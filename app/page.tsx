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
import { Vortex } from "@/components/ui/vortex";

const Home = async () => {
  const products = await getProducts(1, 50, "ASC");
  const categories = await getCategories();

  return (
    <div>
      <Navbar />
      <div className="bg-[#F8F8F8] w-full">
        <div className="py-12">
          {/* <Billboard
            title="Los mejores productos"
            subtitle="Productos tecnológicos especializados en computadoras de escritorio"
            btnText="Ver productos"
            photoUrl="https://images.unsplash.com/photo-1495954222046-2c427ecb546d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          /> */}
          <Vortex
            backgroundColor="black"
            rangeY={350}
            particleCount={500}
            baseHue={0}
            className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full min-h-screen"
          >
            <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
              DMajor Store
            </h2>
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              Los mejores productos tecnológicos especializados para tu hogar
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                Ver productos
              </button>
              {/* <button className="px-4 py-2  text-white ">Watch trailer</button> */}
            </div>
          </Vortex>
        </div>
        <div className="flex space-y-10 flex-col gap-y-8 px-4 sm:px-6 lg:px-36">
          <Categories title="Categorías" items={categories} />
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
