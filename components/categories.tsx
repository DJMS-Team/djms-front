import React, { useState } from 'react';
import { Product } from '../interfaces/product.interface';
import ProductCard from './ui/product-card';
import CategoryCard from './ui/category-card';

interface CategoriesProps {
  title: string;
  items: Product[];
}

const Categories: React.FC<CategoriesProps> = ({ title, items }) => {
  return (
    <div className="space-y-2">
      <h3 className="font-bold text-3xl">{title}</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols">
          {items.map((item) => (
            <CategoryCard key={item.id} data={item} />
          ))}
        </div>
    </div>
  );
};

export default Categories;
