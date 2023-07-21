import React, { useEffect } from "react";
import MyImage from "./MyImage";
import {useCustomHook } from "../context/product_context";
import { useParams } from "react-router-dom";
import PageNavigation from "./PageNavigation";
import { Repeat1, ShieldCheck, Truck } from "lucide-react";
import AddToCart from "./AddToCart";
import Starr from "./Starr";
const API = "https://api.pujakaitem.com/api/products";
const SingleProducts = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useCustomHook();
  const { id } = useParams();
  const {
    id:alias,
    name,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
    // console.log("🚀 ~ file: SingleProducts.js:26 ~ SingleProducts ~ image:", image)

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  },[]);


  if (isSingleLoading) {
    return <h1 className="h-screen w-screen text-5xl font-bold text-center my-auto">Loading.....</h1>;
  }

  return (
    <div className="">
      <PageNavigation title={name} />
      <div className="max-w-7xl mx-10 md:mx-auto md:flex gap-20 justify-center">
        <MyImage imgs={image} />
        <div className="text-Neutral-100 space-y-3 my-14 max-w-lg">
          <h1 className="uppercase my-2 text-3xl">{name}</h1>
          <div className="flex gap-10">
            <Starr stars={stars} reviews={reviews}/>
          </div>
          <h1 className="font-bold text-lg">MRP:{price}</h1>
          <h1 className="font-bold text-base text-blue-400">
            Deal of the Day : {price}
          </h1>
          <p>{description}</p>
          <div className="flex justify-between">
            <div className="text-center">
                <Truck className="mx-auto my-2" />
              <h1 className="text-xs text-Neutral-100">Free Delivery</h1>
            </div>
            <div className="text-center ">
            <Repeat1 className="mx-auto my-2" />
              <h1 className="text-xs text-Neutral-100">30 Days Replacement</h1>
            </div>
            <div className="text-center">
            <Truck className="mx-auto my-2"/>
              <h1 className="text-xs text-Neutral-100">Suthar Delivered</h1>
            </div>
            <div className="text-center">
            <ShieldCheck className="mx-auto my-2"/>
              <h1 className="text-xs text-Neutral-100">
                Two Years of Warranty
              </h1>
            </div>
          </div>
          <hr className="border-2 border-Neutral-100" />
          <h1>
            Available:
            {stock > 0 ? (
              <span className="mx-3 font-bold text-Neutral-100">In Stock</span>
            ) : (
              <span>Out of Stock</span>
            )}
          </h1>
          <h1>
            Brand:
            <span className="mx-3 font-bold text-Neutral-100">{company}</span>
          </h1>
          <hr className="border-2 border-Neutral-100" />
          {stock > 0 && <AddToCart product = {singleProduct}/>}
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;