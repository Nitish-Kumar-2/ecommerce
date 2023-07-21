import React from 'react'
import Product from './Product'
// import { useAppContext } from '../context/productContext'
const GridVeiw = ({products}) => {
    // const {products} = useAppContext();
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {
        products.map((currElm)=>{
            return <Product key={currElm.id} {...currElm}/>
        })
    }
    </div>
  )
}

export default GridVeiw