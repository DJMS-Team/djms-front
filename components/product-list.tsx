
import React from 'react';
import { Product } from '../interfaces/product.interface';
import NoResults from "../components/ui/no-results";

interface ProductListProps {
    title: string;
    items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {items.length == 0 && <NoResults/>}
            <ul>
            {Array.isArray(items) && items.map((product) => (
        <li key={product.id}>
            <h4>{product.product_name}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </li>
    ))}
</ul>

        </div>
    );
};

export default ProductList;
