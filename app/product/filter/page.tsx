'use client'
import { useEffect, useState } from 'react';
import { getFilteredProductsFromCookie, getQueryTypeFromCookie } from '@/cookies/filtered-products.cookies';
import { Product } from '@/interfaces/product.interface';
import ProductList from '@/components/product-list';
import { Badge } from '@/components/ui/badge';
import Cookies from 'js-cookie';

const FilteredProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [queryType, setQueryType] = useState<string | undefined>('');
  const [queryValue, setQueryValue] = useState();

  const updateFilteredProducts = () => {
    const storedProducts = getFilteredProductsFromCookie();
    setFilteredProducts(storedProducts);
    console.log('Stored products:', storedProducts);
  };

  const updateQueryType = () => {
    console.log('query type actualizandose: ' + getQueryTypeFromCookie()?.queryType)
    setQueryType(getQueryTypeFromCookie()?.queryType);
  }

  const updateQueryValue = () => {
    console.log('query value actualizandose: ' + getQueryTypeFromCookie()?.value)
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
      <div className='px-4 sm:px-6 lg:px-36 mt-3'>
        <Badge>
          {`${queryType} cuando ${queryValue}`}
        </Badge>
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-36 mt-3">
      <ProductList
        title="Productos disponibles"
        items={filteredProducts || []}
      />
      </div>
    </>
  );
};

export default FilteredProductsPage;
