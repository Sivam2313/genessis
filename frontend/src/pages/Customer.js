import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Search from '../components/Customer/Search'
import Avatar from '../components/Customer/Avatar'
import ProductList from '../components/Customer/ProductList'
import Popup from '../components/Customer/Popup'

const Customer = () => {
  const [products, setProducts] = useState([
    {
      brand: "Adidas shoes",
      name: "Zapid M running shoes",
      price: "$200",
      originalPrice: "$400",
      remarks: "+2 Fliptokens",
      discount: "50%",
    },
    {
      brand: "Adidas shoes",
      name: "Zapid M running shoes",
      price: "$200",
      originalPrice: "$400",
      remarks: "+2 Fliptokens",
      discount: "50%",
    },
    {
      brand: "Adidas shoes",
      name: "Zapid M running shoes",
      price: "$200",
      originalPrice: "$400",
      remarks: "+2 Fliptokens",
      discount: "50%",
    },
    {
      brand: "Adidas shoes",
      name: "Zapid M running shoes",
      price: "$200",
      originalPrice: "$400",
      remarks: "+2 Fliptokens",
      discount: "50%",
    },
  ]);
  const [discountedProducts, setDiscountedProducts] = useState([
    {
      brand: "Adidas shoes",
      name: "Zapid M running shoes",
      price: "$200",
      originalPrice: "$400",
      remarks: "$50 using 2 FlipTokens",
      discount: "50%",
    },
    {
      brand: "Adidas shoes",
      name: "Zapid M running shoes",
      price: "$200",
      originalPrice: "$400",
      remarks: "$50 using 2 FlipTokens",
      discount: "50%",
    },
    {
      brand: "Adidas shoes",
      name: "Zapid M running shoes",
      price: "$200",
      originalPrice: "$400",
      remarks: "$50 using 2 FlipTokens",
      discount: "50%",
    },
    {
      brand: "Adidas shoes",
      name: "Zapid M running shoes",
      price: "$200",
      originalPrice: "$400",
      remarks: "$50 using 2 FlipTokens",
      discount: "50%",
    },
  ]);
  const [show, setShow] = useState(-1)
  return (
    <div>
      <Navbar />
      <div className="pt-[5vh] w-full pl-32">
        <div className="w-full flex justify-center">
          <Search />
          <Avatar />
        </div>
        <div className="mt-20 text-left pl-12">
          <div className="font-bold font-head text-4xl mb-12">
            New Years Sale
          </div>
          <ProductList products={products} setShow={setShow}/>
        </div>
        <div className="mt-20 text-left pl-12 mb-12">
          <div className="font-bold font-head text-4xl mb-12">
            Get Discount using FlipTokens
          </div>
          <ProductList products={discountedProducts} />
          {
            (show!=-1)?<Popup />:null
          }
        </div>
      </div>
    </div>
  );
}

export default Customer