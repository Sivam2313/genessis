import React from 'react'
import { useState } from "react";
import classNames from "classnames";
import HomeIcons from "../icons/HomeIcons";
const Acordian = ({label,element,open,setOpen,idx}) => {
  return (
    <div className="w-full mt-0">
      <input
        id="expandCollapse"
        checked={open == idx}
        type="checkbox"
        className="peer sr-only"
      />
      <label
        htmlFor="details"
        className={classNames(
          "w-full flex justify-left font-head text-lg items-center  text-onSurface   p-4",
          "hover: rounded-t-xl text-left",
          "transition-colors duration-1000 ease-in-out"
        )}
        onClick={() => {
          if (open == idx) {
            setOpen(-1);
          } else {
            setOpen(idx);
          }
        }}
      >
        {label}
      </label>
      <div
        className={classNames(
          "overflow-hidden h-0",
          "peer-checked:h-[12vh]  peer-checked:overflow-scroll ",
          "transition-[height] border-outline rounded-b-xl duration-400 ease-in-out "
        )}
      >
        {element}
      </div>
    </div>
  );
}

export default Acordian