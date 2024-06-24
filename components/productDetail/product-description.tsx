interface ProductDescriptionProps {
  description: string | undefined;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Description</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ProductDescription;
