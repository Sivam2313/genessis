import React, { useState } from "react";
import Details from "./Details";
import Acordian from "./Acordian";

const AboutSeller = () => {
    const [details, setDetails] = useState("Details wecedbhc adbvhavb havbhjevb hbvhjavb hvbhjavb bahcbahvbbvhjdsbchakds dkbvwjdbvhdv h")
    const [open, setOpen] = useState(0  );
    const element = [
    {
        label: "About Seller",
        element: <Details text={details}/>,
    },
    {
        label: "Details",
        element: <Details text={details}/>,
    }
  ]
  return (
    <div className="w-10/12 mt-10 rounded-xl pb-2 divide-y border-outline border border-primary rounded-xl">
      {element.map((item, index) => (
        <Acordian
          key={index}
          label={item.label}
          element={item.element}
          open={open}
          setOpen={setOpen}
          idx={index}
        />
      ))}
    </div>
  );
};

export default AboutSeller;
