import React, { useState } from 'react'
import ProductDetails from '../products/ProductDetails'
const ProductList = ({products,setShow}) => {
  return (
    <div className="flex overflow-scroll">
      {products.map((item, idx) => {
        return (
          <div className="pe-6" onClick={(e)=>{setShow(idx)}}>
            <ProductDetails details={item}/>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList