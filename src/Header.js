import { Menu, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { user, logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log("message" + err.message);
    }
  };
  return (
    <nav className="bg-white sticky top-0 z-50 border-b-2 border-slate-100">
      <div className="md:mx-16 flex items-center justify-between h-20 px-4 ">
        <NavLink to="/">
          <div className="flex-shrink-0 font-bold text-blue-400 text-3xl font-serif tracking-wider">
            Suthar <span className="text-gray-500">Store</span>
          </div>
        </NavLink>
        <div className="hidden md:block">
          <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
            <NavLink
              to="/"
              className="block md:inline-block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-100  focus:bg-gray-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block md:inline-block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-100  focus:bg-gray-200"
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className="block md:inline-block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-100  focus:bg-gray-200"
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className="block md:inline-block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-100  focus:bg-gray-200"
            >
              Contact
            </NavLink>
            <NavLink to="/cart">
              <ShoppingCart
                size={30}
                className="block md:inline-block rounded-md mx-2 hover:bg-gray-100  focus:bg-gray-200"
              />
            </NavLink>
            {user ? (
              <NavLink
                to="/"
                onClick={handleLogOut}
                className="block md:inline-block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-400 hover:text-white"
              >
                Hi! {user.email.split("@")[0]}
              </NavLink>
            ) : (
              <NavLink
                to="/signin"
                className="block md:inline-block px-3 py-2 rounded-md text-lg font-medium bg-blue-400 text-white hover:bg-blue-500"
              >
                Log In
              </NavLink>
            )}
          </div>
        </div>
        <button
          type="button"
          className="md:hidden bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-300 focus:outline-none focus:bg-gray-200 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X color="#000000" /> : <Menu color="#000000" />}
        </button>
      </div>
      <div className="md:hidden">
        {showMobileMenu && (
          <div className="h-screen mx-28 text-center px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700 ">
            <NavLink
              to="/"
              className="block md:inline-block px-3 py-2 rounded-md hover:bg-gray-200 focus:outline-none  focus:bg-gray-300 focus:text-gray-900"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block md:inline-block px-3 py-2 rounded-md hover:bg-gray-200 focus:outline-none  focus:bg-gray-300 focus:text-gray-900"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className="block md:inline-block px-3 py-2 rounded-md hover:bg-gray-200 focus:outline-none  focus:bg-gray-300 focus:text-gray-900"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className="block md:inline-block px-3 py-2 rounded-md hover:bg-gray-200 focus:outline-none  focus:bg-gray-300 focus:text-gray-900"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/cart"
              className="block md:inline-block px-14 py-2 rounded-md hover:bg-gray-200 focus:outline-none  focus:bg-gray-300 focus:text-gray-900"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <ShoppingCart color="#000000" />
            </NavLink>
            {user ? (
              <NavLink
                to="/signin"
                onClick={handleLogOut}
                className="block md:inline-block px-3 py-2 rounded-md bg-blue-400 text-white"
                // onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                Hi! {user.email.split("@")[0]}
              </NavLink>
            ) : (
              <NavLink
                to="/signin"
                className="block md:inline-block px-3 py-2 rounded-md bg-blue-400 text-white"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                Log In
              </NavLink>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
