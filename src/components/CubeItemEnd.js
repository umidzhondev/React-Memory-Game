import React from "react";

const CubeItemEnd = ({itemClassName,src,name}) => {
  return (
    <div className={`cube__item ${itemClassName}`}>
      <img src={src} alt={name} />
    </div>
  );
};

export default CubeItemEnd;
