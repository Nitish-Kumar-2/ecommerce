import React from 'react'
import { NavLink } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='my-16'>
          <h2 className='text-6xl text-red-400 font-bold text-center'>404</h2>
          <h3 className='text-Neutral-100 text-lg text-center font-bold'>UH OH! You're lost.</h3>
          <p className='text-Neutral-100 text-base text-center font-bold'>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
            <p className='text-center my-10'>
            <NavLink to="/" className="">
            <button className='text-lg bg-red-400 py-2 px-4 text-white-100 font-bold'>Go Back to Home</button>
            </NavLink>
            </p>
        </div>
  )
}

export default ErrorPage