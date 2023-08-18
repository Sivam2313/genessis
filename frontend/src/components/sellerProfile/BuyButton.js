import React from 'react'

const BuyButton = () => {
  return (
    <button className="w-[9rem] min-w-[150px] flex justify-center text-onPrimary text-left ml-10 font-sub text-xl rounded-full bg-primary p-2">
      <div className="pl-3 text-lg flex justify-center items-center text-center">
        Buy Tokens
      </div>
    </button>
  );
}

export default BuyButton