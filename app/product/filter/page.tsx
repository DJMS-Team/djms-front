'use client'
import { useEffect, useState } from 'react';
import { getFilteredProductsFromCookie } from '@/cookies/filtered-products.cookies';
import { Product } from '@/interfaces/product.interface';

const FilteredProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const updateFilteredProducts = () => {
    const storedProducts = getFilteredProductsFromCookie();
    setFilteredProducts(storedProducts);
    console.log('Stored products:', storedProducts);
  };

  useEffect(() => {
    updateFilteredProducts();

    window.addEventListener('cookieChange', updateFilteredProducts);

    return () => {
      window.removeEventListener('cookieChange', updateFilteredProducts);
    };
  }, []);

  return (
    <div className='mt-10'>
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
