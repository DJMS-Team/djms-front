'use client'
import { useEffect, useState } from 'react';
import { clearFilteredProductsCookie, getFilteredProductsFromCookie, getQueryTypeFromCookie } from '@/cookies/filtered-products.cookies';
import { Product } from '@/interfaces/product.interface';
import { ProductFilteredList } from '@/components/products-filtered-list';

const FilteredProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [queryType, setQueryType] = useState<string | undefined>('');
  const [queryValue, setQueryValue] = useState();

  const updateFilteredProducts = () => {
    const storedProducts = getFilteredProductsFromCookie();
    setFilteredProducts(storedProducts);
  };

  const updateQueryType = () => {
    setQueryType(getQueryTypeFromCookie()?.queryType);
  }

  const updateQueryValue = () => {
    setQueryValue(getQueryTypeFromCookie()?.value);
  }

  const updateWhenCookies = () => {
    updateFilteredProducts();
    updateQueryType();
    updateQueryValue();
  }

  useEffect(() => {
    updateWhenCookies();

    window.addEventListener('cookieChange', updateWhenCookies);

    return () => {
      window.removeEventListener('cookieChange', updateWhenCookies);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col w-full gap-y-8 mt-3">
      <ProductFilteredList
        title="Productos disponibles"
        items={filteredProducts || []}
        productFilteredBadge={{queryType, queryValue}}
      />
      </div>
    </>
  );
};

export default FilteredProductsPage;
