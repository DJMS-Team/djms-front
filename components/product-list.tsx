//  importar product de types osea la interface


interface ProductListProps {

}

const ProductList: React.FC<ProductListProps> ({
    
}) => {
    return (
        <div className="space-y-4">
        <h3 className="font-bold text-3xl">{title}</h3>
        </div>
    );
}

export default ProductList;