import React from 'react'
import pic from '../../assets/product.png';
import Buynow from './Buynow';
import AddToCart from './AddToCart';
const Popup = () => {
  return (
    <div className="h-screen w-screen bg-popup fixed top-0 left-0 flex justify-center items-center">
      <div className="bg-surface w-5/12 h-[40vh] rounded-xl flex absolute min-w-[800px]">
        <div className="w-1/2 p-6">
          <img src={pic} alt="" className="w-full h-full rounded-xl" />
        </div>
        <div className="w-1/2 p-6">
          <div className="w-full pt-3 font-head text-5xl">
            Zapid M running shoes
          </div>
          <div className="w-full pt-3 font-alt text-onSurface text-base">
            Adidas shoes
          </div>
          <div className="pt-3 w-full flex">
            <div className="w-auto pt-3 font-head text-4xl">$200</div>
            <div className="w-auto mt-1 pl-3 pt-4 font-alt font-bold text-onSurface text-xl">
              <strike>$400</strike>
            </div>
            <div className="w-auto pl-3 pt-4  font-alt text-onSurface text-base mt-1">
              50% off
            </div>
          </div>
          <div className="w-full pt-3 font-alt text-onSurface text-base text-lg font-bold">
            <span className="text-[#7D5260]">+2 Fliptokens</span> For Buying
            this
          </div>
            <div className='flex justify-start'>
                <Buynow />
                <AddToCart />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Popup