"use client";

import { getProductById } from "@/actions/get-product";
import { useEffect, useState, useTransition } from "react";
import Cookies from "js-cookie";
import { createComment } from "@/actions/create-comment";
import ProductDetails from "@/components/productDetail/product-details";
import ProductSidebar from "@/components/productDetail/product-information";
import { Product } from "@/interfaces/product.interface";
import { User } from "@/interfaces/user.interface";

const getCurrentUserFromCookies = (): User | null => {
  const userCookie = Cookies.get("currentUser");
  return userCookie ? JSON.parse(userCookie) : null;
};

const PageProduct = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [errorComment, setErrorComment] = useState<string | undefined>("");
  const [successComment, setSuccessComment] = useState<string | undefined>("");
  const [isPendingComment, setIsPendingComment] = useTransition();
  const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUserFromCookies);

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

    if (!currentUser) {
      setErrorComment("You must be logged in to comment!");
      return;
    }

    const values = {
      description: event.currentTarget.description.value,
      is_question: true,
      user_id: currentUser.id,
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
        <ProductDetails
          product={product}
          handleSubmitComment={handleSubmitComment}
          errorComment={errorComment}
          successComment={successComment}
          currentUser={currentUser ? currentUser : null}
        />
        <ProductSidebar product={product} />
      </div>
      {/* <ProductList
        title="Seller products"
        products={Array.from({ length: 3 }).map(() => product)}
      />
      <ProductList
        title="Related products"
        products={Array.from({ length: 3 }).map(() => product)}
      /> */}
    </div>
  );
};

export default PageProduct;