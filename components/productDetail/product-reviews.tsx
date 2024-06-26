import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ReviewCard from "./review-card";
import { Review } from "@/interfaces/review.interface";
import { Product } from "@/interfaces/product.interface";
import ReviewTotalCard from "./review-total-card";
import styles from "../navbar.module.css";

interface ProductReviewsProps {
  reviews: Review[] | undefined;
  product: Product | null;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews, product }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Reseñas</h2>
        <ReviewTotalCard key={product?.id} product_id={product?.id} />
      <AlertDialog>
        <AlertDialogTrigger className={`${styles.primaryBtn} px-4 py-2 text-white rounded-lg w-48`}>
          Ver todas las reseñas
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Todas las reseñas</AlertDialogTitle>
            <AlertDialogDescription className="max-h-[300px] overflow-auto text-black">
              {reviews?.slice(0, reviews.length).map((review, index) => (
                <ReviewCard key={review.id || index} review={review} />
              ))}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProductReviews;
