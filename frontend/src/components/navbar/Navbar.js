import React from 'react'
import HomeIcons from '../icons/HomeIcons';
import ProfileIcons from '../icons/ProfileIcons';
import TokenIcons from '../icons/TokenIcons';

const Navbar = () => {
  const items = [
    {
      icon: <HomeIcons/>,
      link: '/'
    },
    {
      icon: <ProfileIcons/>,
      link: '/seller'
    },
    {
      icon: <TokenIcons/>,
      link: '/tokens'
    },
  ]
  return (
    <nav className="fixed flex flex-col h-screen bg-primaryContainer w-16 items-center justify-center ">
      {items.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col items-center justify-center h-16 w-full"
          >
            {item.icon}
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar