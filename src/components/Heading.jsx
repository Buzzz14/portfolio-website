  import React from "react";

  const Heading = ({title, side }) => {
    return (
      <div className={`flex flex-col gap-2 items-center lg:items-${side}`}>
        <h1 className="text-4xl font-semibold mb-2">{title}</h1>
        <div className="w-28 bg-red-500 h-1"/>
      </div>
    );
  };

  export default Heading;
