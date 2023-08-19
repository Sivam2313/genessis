import React from 'react'
import prodImg from "../../assets/product.png";
const ProductDetails = ({details}) => {
  return (
    <div className="bg-surface min-w-[350px]">
      <img src={prodImg} className="w-full h-[40vh]"></img>
      <div>
        <div className="w-full pl-3 pt-2 font-alt text-onSurface text-base">
          {details.brand}
        </div>
        <div className="w-full pl-3  font-head text-2xl">
          {details.name}
        </div>
        <div className="flex w-full justify-start">
          <div className="w-auto pl-3 pt-4  font-head text-onSurface text-2xl">
            {details.price}
          </div>
          <div className="w-auto pl-3 pt-4 font-alt font-bold text-onSurface text-xl">
            <strike>{details.originalPrice}</strike>
          </div>
          <div className="w-auto pl-3 pt-4  font-alt text-onSurface text-base mt-1">
            {details.discount}
          </div>
        </div>
        <div className='w-full pl-3 pt-2 pb-2 font-alt text-onSurface text-base'>
          {details.remarks}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails