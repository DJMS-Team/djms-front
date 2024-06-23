'use client'
import { useEffect, useState } from 'react';
import { getFilteredProductsFromCookie, clearFilteredProductsCookie } from '@/cookies/filtered-products.cookies';
import { Product } from '@/interfaces/product.interface';

const FilteredProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = getFilteredProductsFromCookie();
    setFilteredProducts(storedProducts);

    clearFilteredProductsCookie();
  }, []);

  return (
    <div>
      {filteredProducts.map(product => (
        <div key={product.id}>
          <p>{product.product_name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FilteredProductsPage;
