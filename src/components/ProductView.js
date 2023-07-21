import React from "react";
import GridVeiw from "./GridVeiw";
import { useFilterContext } from "../context/filter_context";
import ListView from "./ListView";

const ProductView = () => {
  const {filter_products, grid_view} = useFilterContext();
  
    if (grid_view === true) {
      return <GridVeiw products={filter_products} />;
    }
    else{
      return <ListView products={filter_products} />;
      
    }

};

export default ProductView;