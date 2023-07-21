import React from 'react'
import { NavLink } from 'react-router-dom'
const PageNavigation = ({title}) => {
  return (
    <div className='bg-blue-50 text-Neutral-100 font-bold text-xl h-16 px-5 py-3'>
        <NavLink className="text-2xl text-blue-400" to="/">Home/</NavLink>{title}
    </div>
  )
}

export default PageNavigation