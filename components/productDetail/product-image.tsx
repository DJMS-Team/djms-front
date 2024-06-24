import Image from "next/image";

interface ProductImageProps {
  photoUrl: string | undefined;
  productName: string | undefined;
}

const ProductImage: React.FC<ProductImageProps> = ({
  photoUrl,
  productName,
}) => {
  return (
    <Image
      src={photoUrl ? photoUrl : ""}
      alt={productName ? productName : "Empty product!"}
      width={400}
      height={400}
      className="rounded-lg mx-auto"
    />
  );
};

export default ProductImage;
