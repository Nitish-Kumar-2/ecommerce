import React from "react";
import { useFilterContext } from "../context/filter_context";
import { AlignJustify, LayoutGrid } from "lucide-react";
const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();
  return (
    <div className="flex justify-between bg-white px-4 py-3 sticky top-20 z-10 border-gray-100 border-b-2">
      <div className="md:flex md:gap-10">
        <button className={grid_view ? "" : ""} onClick={setGridView}>
        <LayoutGrid className="md:flex hidden" />
        </button>
        <button className={!grid_view ? "" : ""} onClick={setListView}>
        <AlignJustify className="md:flex hidden" />
        </button>
      </div>
      <h1 className="text-lg">{filter_products.length} Total Products</h1>
      <form action="#">
        <label htmlFor="sort"></label>
        <select
          className="text-center border-2  py-2 md:px-5 bg-gray-100"
          name="sort"
          id="sort"
          onClick={sorting}
        >
          <option value="lowest">Price(lowest)</option>
          <option value="#" disabled></option>
          <option value="highest">Price(highest)</option>
          <option value="#" disabled></option>
          <option value="a-z">Price(a-z)</option>
          <option value="#" disabled></option>
          <option value="z-a">Price(z-a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;