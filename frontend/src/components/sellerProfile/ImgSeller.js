import React from 'react'
import logo from "../../assets/Adidas-logo.webp"

const ImgSeller = () => {
  return (
    <div className="logo h-[50vh] border-outline w-10/12 max-h-[600px] max-w-[800px] border-solid border-2 rounded-lg">
      <img
        className="h-full w-full rounded-lg object-cover"
        src={logo}
        alt="logo"
      />
    </div>
  );
}

export default ImgSeller