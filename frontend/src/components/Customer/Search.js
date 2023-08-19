import React from 'react'
import SearchIcons from '../icons/SearchIcons'

const Search = () => {
  return (
    <div className="flex rounded-xl justify-between text-onSurface bg-surface w-6/12 h-12 p-3">
      <input
        className="bg-surface w-11/12 border-none outline-none font-alt text-onSurface text-base"
        type="text"
        placeholder="Search for products"
      />
      <SearchIcons />
    </div>
  );
}

export default Search