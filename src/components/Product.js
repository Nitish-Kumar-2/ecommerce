import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice";
const Product = (currElm) => {
  const { id, name, image, price, category } = currElm;
  return (
    // navLink attach krna
    <NavLink to={`/singleproduct/${id}`}>
    <div className="m-5">
    <div className="relative hover:opacity-70 ease-in-out">
    <img src={image} className="rounded-lg" alt="" />
        <div className="flex justify-between m-2">
          <h4 className="text-Neutral-100 capitalize">{name}</h4>
          <h4 className="text-blue-400">
            <FormatPrice price={price} />
          </h4>
          <h3 className="absolute text-Neutral-100 uppercase text-sm py-2 px-4 rounded-full m-3 right-0 top-0 bg-white">
            {category}
          </h3>
        </div>
      </div>
      </div>
    </NavLink>
    );
};

export default Product;
