import React, { useState } from 'react';
import { Product } from '../interfaces/product.interface';
import ProductCard from './ui/product-card';
import CategoryCard from './ui/category-card';
import { ProductCategory } from '@/interfaces/product-category.interface';

interface Categories {
  title: string;
  items: ProductCategory[];
}

const Categories: React.FC<Categories> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols">
            {
                items.map((item) => <CategoryCard data={item} key={item.id} /> )
            }
        </div>
    </div>
  );
};

export default Categories;
