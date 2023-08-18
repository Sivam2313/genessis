import React, { useState } from "react";
import TokenIcons from "../icons/TokenIcons";
import BuyButton from "./BuyButton";

const SellerName = () => {
    const [name, setName] = useState("Unga Bunga")
    const [token, setToken] = useState(2000)

  return (
    <div>
      <div className="w-[40vw] text-left pl-1  font-bold font-head text-6xl">
        {name}
      </div>
      <div className="flex w-1/2 mt-6 ml-1">
        <div className="w-[9rem] flex justify-center text-onTertiert text-left min-w-[150px] font-sub text-xl rounded-full bg-tertiert p-2">
          <TokenIcons />
          <div className="pl-3">{token}</div>
        </div>
        <BuyButton />
      </div>
    </div>
  );
};

export default SellerName;
