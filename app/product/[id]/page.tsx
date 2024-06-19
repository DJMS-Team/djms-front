"use client";

import { getProductById } from "@/actions/get-product";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  IconBrandPaypalFilled,
  IconCheck,
  IconExclamationCircle,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useTransition } from "react";
import { Product } from "@/interfaces/product";
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
import { IconUser } from "@tabler/icons-react";
import { createComment } from "@/actions/create-comment";

const PageProduct = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [errorComment, setErrorComment] = useState<string | undefined>("");
  const [successComment, setSuccessComment] = useState<string | undefined>("");
  const [isPendingComment, setIsPendingComment] = useTransition();
  const currentUser = "50bc2998-8b40-4e79-8095-3619dc7b3e98";

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductById(id);
      setProduct(response);
    };

    fetchData();
  }, [id]);

  const handleSubmitComment: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();

    const values = {
      description: event.currentTarget.description.value,
      is_question: true,
      user_id: currentUser,
      product_id: id,
    };

    setErrorComment("");
    setSuccessComment("");

    setIsPendingComment(() => {
      createComment(values).then((data: any) => {
        setErrorComment(data.error);
        setSuccessComment(data.success);
      });
    });
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:w-1/2">
          {
            <div className="flex gap-2">
              <Badge>{product?.product_category?.category}</Badge>
            </div>
          }
          <Image
            src={product?.photo_url ? product.photo_url : ""}
            alt={
              product?.product_name ? product.product_name : "Empty product!"
            }
            width={400}
            height={400}
            className="rounded-lg mx-auto"
          />
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="text-gray-600 mt-2">{product?.description}</p>
          </div>
          <div className="mt-6 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Questions</h2>
            <form onSubmit={handleSubmitComment} className="flex gap-5">
              <Input name="description" placeholder="Ask a question" />
              <Button>Send</Button>
            </form>
            {errorComment && (
              <div className="text-white font-bold bg-red-500 rounded-lg px-2 py-1 flex gap-2">
                <IconExclamationCircle /> {errorComment}
              </div>
            )}
            {successComment && (
              <div className="text-white font-bold bg-green-500 rounded-lg px-2 py-1 flex gap-2">
                <IconCheck /> {successComment}
              </div>
            )}
            <h2 className="text-2xl font-bold">Reviews</h2>
            {product?.reviews?.slice(0, 3).map((review, index) => (
              <div
                key={review.id || index}
                className="flex gap-3 p-2 justify-center items-center border-b-[1px] border-b-gray-400"
              >
                <div className="flex gap-1 justify-center items-center flex-col min-w-32">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    <IconUser size={40} />
                  </div>
                  <div>Rating: {review.score}</div>
                </div>
                <p className="flex-grow">
                  {review.comment
                    ? review.comment
                    : "No comments for this product!"}
                </p>
              </div>
            ))}
            <AlertDialog>
              <AlertDialogTrigger className="px-4 py-2 bg-primary text-white rounded-lg w-48">
                See all reviews
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>All reviews</AlertDialogTitle>
                  <AlertDialogDescription className="max-h-[300px] overflow-auto text-black">
                    {product?.reviews
                      ?.slice(3, product?.reviews.length)
                      .map((review, index) => (
                        <div
                          key={review.id || index}
                          className="flex gap-3 p-2 justify-center items-center border-b-[1px] border-b-gray-400"
                        >
                          <div className="flex gap-1 justify-center items-center flex-col min-w-32">
                            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                              <IconUser size={40} />
                            </div>
                            <div>Rating: {review.score}</div>
                          </div>
                          <p className="flex-grow">
                            {review.comment
                              ? review.comment
                              : "No comments for this product!"}
                          </p>
                        </div>
                      ))}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
          <div className="sticky top-8">
            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  {product?.product_name}
                </CardTitle>
                <p className="text-gray-600">
                  Sold by:{" "}
                  {product?.sellerId ? product.sellerId : "Desconocido"}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">
                  ${product?.price ? product.price : 0.0} USD
                </p>
                <p>Stock: 0</p>
              </CardContent>
              <CardFooter className="flex gap-5">
                <Button>Buy now</Button>
                <Button>Add to cart</Button>
              </CardFooter>
            </Card>
            <Card className="w-2/3 ml-auto">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Pay method</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 justify-center items-center">
                <IconBrandPaypalFilled size={60} color="blue" />
                <p className="font-semibold">PayPal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-bold mt-10">Seller products</h3>
        <div className="flex gap-5 flex-wrap justify-evenly">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="mt-4 w-1/4">
              <Card className="">
                <CardHeader>
                  <CardTitle>Product Name</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={product?.photo_url ? product.photo_url : ""}
                    alt="Product Name"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <p className="text-2xl font-bold mt-4">$100.00 USD</p>
                  <p>Stock: 0</p>
                </CardContent>
                <CardFooter>
                  <Button>View product</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <h3 className="text-4xl font-bold mt-10">Related products</h3>
        <div className="flex gap-5 flex-wrap justify-evenly">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="mt-4 w-1/4">
              <Card className="">
                <CardHeader>
                  <CardTitle>Product Name</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={product?.photo_url ? product.photo_url : ""}
                    alt="Product Name"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <p className="text-2xl font-bold mt-4">$100.00 USD</p>
                  <p>Stock: 0</p>
                </CardContent>
                <CardFooter>
                  <Button>View product</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageProduct;
