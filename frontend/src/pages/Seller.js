import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import SellerName from '../components/sellerProfile/SellerName';
import AboutSeller from '../components/sellerDetails/AboutSeller';
import ImgSeller from '../components/sellerProfile/ImgSeller';
import TokenInfo from '../components/tokenGiveaway/TokenInfo';
import TransactionTable from '../components/transactionHistory/TransactionTable';

const Seller = () => {
  const [sold, setSold] = useState(100)
  const [bought, setBought] = useState(100);
  return (
    <div>
      <Navbar />
      <div className="pt-[5vh] pl-32 flex">
        <div className="h-full">
          <ImgSeller /> 
          <AboutSeller />
        </div>
        <div className="h-full">
          <SellerName />
          <TokenInfo bought={bought} sold={sold} />
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}

export default Seller