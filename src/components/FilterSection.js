import React from "react";
import { useFilterContext } from "../context/filter_context";
import { Check } from "lucide-react";
import FormatPrice from "./FormatPrice";
const FilterSection = () => {
  const {
    filters: { text, color, category, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorData = getUniqueData(all_products, "colors");

  return (
    <div className="hidden md:block text-center sticky top-20 py-3 h-fit my-16">
      <div className="">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Search items.."
            onChange={updateFilterValue}
            className="border-2 text-Neutral-100 bg-gray-100 border-gray-300 w-44 p-1"
          />
        </form>
        <div className="grid grid-cols-1">
          <h1 className="font-bold text-Neutral-100 text-2xl my-6">Category</h1>
          <div className="grid">
            {categoryData.map((currElm, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={currElm}
                  className={
                    category === currElm
                      ? "uppercase my-2 cursor-pointer underline"
                      : "uppercase my-2 cursor-pointer"
                  }
                  onClick={updateFilterValue}
                >
                  {currElm}
                </button>
              );
            })}
          </div>
        </div>
        <h1 className="font-bold text-Neutral-100 text-2xl my-6">Brands</h1>
        <select
          className="text-center border-2  py-2 px-5 uppercase bg-gray-100 mx-14"
          name="company"
          id="company"
          onClick={updateFilterValue}
        >
          {companyData.map((currElm, index) => {
            return (
              <option key={index} name="company" value={currElm}>
                {currElm}
              </option>
            );
          })}
        </select>
        <h1 className="font-bold text-Neutral-100 text-2xl my-6">
          Colors
        </h1>
        <div className="flex">
          {colorData.map((currColor, index) => {
            if (currColor !== "all") {
              return (
                <button
                  key={index}
                  name="color"
                  value={currColor}
                  type="button"
                  style={{ backgroundColor: currColor }}
                  className={
                    color === currColor
                      ? "opacity-60 h-6 w-6 rounded-full mx-2"
                      : "h-6 w-6 rounded-full mx-2"
                  }
                  onClick={updateFilterValue}
                >
                  {color === currColor ? <Check /> : null}
                </button>
              );
            }
            return (
              <button
                key={index}
                name="color"
                value={currColor}
                type="button"
                style={{ backgroundColor: currColor }}
                className="uppercase h-6 w-6 mx-2 "
                onClick={updateFilterValue}
              >
                all
              </button>
            );
          })}
        </div>
        <div className=" my-4">
          <h3 className="font-bold text-Neutral-100 text-2xl my-6">Price</h3>
          <p>
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>
        <button
          className="bg-red-400 mx-auto text-white font-bold text-xl my-10 grid text-white-100 px-3 py-2"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
