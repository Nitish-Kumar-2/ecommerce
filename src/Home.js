import FeatureProduct from "./components/FeatureProduct";

import { NavLink } from "react-router-dom";
import Carousel from "./components/Carousel";
const Home = () => {

  return (
    <div className="mb-32 md:mx-20">
      <div className="">
      <Carousel />
      </div>
      <div className="my-10 mx-8 md:mx-0">
        <h1 className="font-bold text-Neutral-100 text-3xl">Brands</h1>
        <div className="flex justify-center items-center gap-10 md:gap-16">
          <NavLink to="/products">
            <img src="/images/Apple.png" className="w-20" alt="" />
          </NavLink>
          <NavLink to="/products">
            <img src="/images/Asus.png" className="w-24" alt="" />
          </NavLink>
          <NavLink to="/products">
            <img src="/images/Dell.png" className="w-20" alt="" />
          </NavLink>
          <NavLink to="/products">
            <img src="/images/Nokia.png" className="w-24" alt="" />
          </NavLink>
          <NavLink to="/products">
            <img src="/images/Samsung.png" className="w-28" alt="" />
          </NavLink>
        </div>
      </div>
      <div className="mx-8 md:mx-0">
        <FeatureProduct />
      </div>
    </div>
  );
};

export default Home;
