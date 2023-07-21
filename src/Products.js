import React from "react";
import Sort from "./components/Sort.js";
import FilterSection from "./components/FilterSection";
import ProductVeiw from "./components/ProductView.js";
const Products = () => {
  return (
    <div className="mb-32 mx-5 md:mx-16 ">
      <div className="flex gap-16">
        <FilterSection className="" />
        <div className="">
          <Sort />
          <ProductVeiw />
        </div>
      </div>
    </div>
  );
};

export default Products;