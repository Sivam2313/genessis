import React, { useState } from 'react'
import profile from '../../assets/profile.jpeg';
const Avatar = () => {
    const [tokens, setTokens] = useState(12)
  return (
    <div className="flex w-4/12 pl-32">
      <div className="bg-surface w-12 h-12 rounded-full flex justify-center items-center font-bold ">
        {tokens}
      </div>
      <div className="pl-3 h-12 w-12 items-center flex">
        <div className='font-head'>
            FLTK
        </div>
      </div>
      <div className='ml-20 h-12 w-12 rounded-full'> 
        <img src={profile} className='w-12 h-12 object-cover rounded-full'></img>
      </div>
    </div>
  );
}

export default Avatar