import React from "react";
import { useCustomHook } from "../context/product_context";
import Product from "./Product";
const FeatureProduct = () => {
  const { isLoading, featureProducts } = useCustomHook();

  if (isLoading) {
    return (
      <div className="justify-center items-center text-3xl">
        ......Loading
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-lg text-blue-400">Check Now</h1>
      <h1 className="mb-4 md:mb-0 font-bold text-Neutral-100 text-4xl">Feature Products</h1>
     
        <div className="grid grid-cols-1 gap-10 md:gap-32 md:grid-cols-2 lg:grid-cols-3">
          {featureProducts.map((currElm) => {
            return <Product key={currElm.id} {...currElm} />;
          })}
        </div>
    
    </div>
  );
};

export default FeatureProduct;
