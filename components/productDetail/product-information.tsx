import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PayMethodCard from "./pay-method-card";
import { Product } from "@/interfaces/product.interface";
import { useCart } from "@/hooks/cart/use-cart";
import { MouseEventHandler } from "react";

interface ProductInformationProps {
  product: Product | null;
}

const ProductInformation : React.FC<ProductInformationProps> = ({ product }) => {

    
  const cart = useCart()

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
     event?.stopPropagation()
     
     if (product) {
       cart.addItem(product);
     }
  }
  console.log(product)


  return (
    <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
      <div className="sticky top-8">
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{product?.product_name}</CardTitle>
            <p className="text-gray-600">Sold by: {product?.seller? product.seller.name : "Uknown"}</p>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${product?.price ? product.price : 0.0} USD</p>
            <p>Stock: 0</p>
          </CardContent>
          <CardFooter className="flex gap-5">
            <Button>Buy now</Button>
            <Button onClick={onAddToCart}>Add to cart</Button>
          </CardFooter>
        </Card>
        <PayMethodCard />
      </div>
    </div>
  );
};

export default ProductInformation;
