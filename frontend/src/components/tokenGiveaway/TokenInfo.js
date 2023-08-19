import React from 'react'
import ManageButton from './ManageButton'

const TokenInfo = ({bought,sold}) => {
  return (
    <div className="w-11/12 bg-primaryContainer rounded-xl mt-20 pb-6 h-fit">
      <div className="font-sub text-lg text-left pt-6 pl-6 pb-4 text-primaryText">
        Token Info
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col justify-center items-center w-full ml-6">
          <div className="font-head w-full font-extrabold text-4xl text-left p-1 text-primaryText">
            {bought} FAT
          </div>
          <div className="font-sub w-full text-sm text-left p-1 text-primaryText">
            Tokens Bought
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="font-head w-full font-extrabold text-4xl text-left p-1 text-primaryText">
            {sold} FAT
          </div>
          <div className="font-sub w-full text-sm text-left p-1 text-primaryText">
            Tokens sold
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start ml-6 mt-6 items-center">
        <ManageButton />
      </div>
    </div>
  );
}

export default TokenInfo