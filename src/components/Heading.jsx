import React from "react";

const Heading = ({title, sTitle}) => {
  return (
    <div className="text-white text-center pt-16 ">
      <h1 className="text-4xl mb-2">{title}</h1>
      <p className="text-normal text-gray-300">{sTitle}</p>
    </div>
  );
};

export default Heading;
