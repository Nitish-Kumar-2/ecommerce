import React from "react";
// import Product from "./Product";
// import { useAppContext } from "../context/productContext";
import FormatPrice from "./FormatPrice";
import { NavLink } from "react-router-dom";
const ListView = ({ products }) => {
  // const { products } = useAppContext();
  return (
    <div className="">
      {products.map((currElm) => {
        const { id, name, image, price, description } = currElm;
        return (
          <div className="flex justify-between border-2 border-gray-100 my-10">
            <img src={image} className="max-w-sm p-8" alt="" />
            <div className="text-Neutral-100 my-10 mr-16">
              <h4 className="text-xl my-3  font-bold">{name}</h4>
              <h4 className="text-blue-400">
                <FormatPrice price={price} />
              </h4>
              <h4 className="tracking-wider">{description.slice(0, 90)}...</h4>
              <NavLink to={`/singleproduct/${id}`}>
                <button className="bg-blue-400 px-6 py-3 font-bold my-5 text-xl text-white">
                  Read More
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;