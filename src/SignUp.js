import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";

import { useUserAuth } from "./context/UserAuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const {signUp} = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    setError("");
    e.preventDefault();
    try { 
        await signUp(email,password);
        navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }
 
  return (
    <section className="bg-blue-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <NavLink to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-40 h-10 mr-2"
            src="/images/logo.png"
            alt="logo"
          />
        </NavLink>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up to your account
            </h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <NavLink
                  to="/signup"
                  className="text-sm font-medium text-blue-400 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </NavLink>
              </div>
              <button
                type="submit"
                className="w-full text-gray-900 font-bold bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <NavLink to="/signin"
                  className="font-medium text-blue-400 hover:underline dark:text-primary-500"
                >
                  Log in
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default SignUp;
  // <div>
  //   <form onSubmit={signUp}>
  //     <h1>Create an account</h1>
  //     <input
  //       type="email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <input
  //       type="password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     />
  //     <button type="submit">Sign Up</button>
  //   </form>
  // </div>
