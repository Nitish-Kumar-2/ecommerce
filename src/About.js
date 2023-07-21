import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="mb-36">
    <h1 className="font-bold text-2xl md:text-6xl my-10 justify-center text-center font-serif">About Us</h1>
      <div className="shadow-lg mx-5 md:mx-16 mb-32 rounded-md  p-4 gap-20 md:flex md:justify-between">
        <div className="">
          <h1 className="font-bold text-blue-400 text-3xl font-serif tracking-wider">
            Suthar <span className="text-gray-500">Ecommerce</span>
          </h1>
          <h1 className="text-lg py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui et,
            veniam possimus asperiores sunt debitis totam beatae nulla obcaecati
            eaque atque nam impedit dolorem quibusdam laborum quasi expedita
            quaerat dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi expedita itaque nesciunt libero aperiam fugiat porro molestias. Laboriosam cumque mollitia velit qui laudantium dolor culpa eveniet impedit perferendis consequatur!
          </h1>
          <NavLink to="/products">
            <button className="text-white mx-24 md:mx-0 font-bold my-10 hover:bg-blue-300 bg-blue-400 py-2 px-4 text-xl font-serif">Shop Now</button>
          </NavLink>
        </div>
        <img src="images/homepage.jpeg" className=" md:w-5/12" alt="" />
      </div>
    </div>
  );
};

export default About;
