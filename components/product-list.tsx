import React, { useState } from 'react';
import { Product } from '../interfaces/product.interface';
import ProductCard from './ui/product-card';

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
        
        <div className="flex flex-wrap gap-5 justify-center">
          {items.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
    </div>
  );
};

export default ProductList;
