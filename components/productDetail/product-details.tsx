import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ProductImage from "./product-image";
import ProductDescription from "./product-description";
import ProductQuestions from "./product-questions";
import ProductReviews from "./product-reviews";
import { Product } from "@/interfaces/product.interface";
import { User } from "@/interfaces/user";

interface ProductDetailsProps {
  product: Product | null;
  handleSubmitComment: React.FormEventHandler<HTMLFormElement>;
  errorComment: string | undefined;
  successComment: string | undefined;
  currentUser: User | null;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  handleSubmitComment,
  errorComment,
  successComment,
  currentUser,
}) => {
  return (
    <div className="md:w-1/2">
      <div className="flex gap-2">
        <Badge>{product?.product_category?.category}</Badge>
      </div>
      <ProductImage
        photoUrl={product?.photo_url[0]}
        productName={product?.product_name}
      />
      <ProductDescription description={product?.description ? product.description : 'There is not a description of the product'} />
      <ProductQuestions
        handleSubmitComment={handleSubmitComment}
        errorComment={errorComment}
        successComment={successComment}
        currentUser={currentUser ? currentUser : null}
      />
      <ProductReviews reviews={product?.reviews} product={product} />
    </div>
  );
};

export default ProductDetails;
