import React from 'react'

const Details = ({text}) => {
  return (
    <div className="w-full bg-surface  max-h-[600px] max-w-[800px] p-6 text-left text-onSurface" >
      <h1>{text}</h1>
    </div>
  );
}

export default Details