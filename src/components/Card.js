import React, { useState, useMemo } from "react";
import { CubeItem } from "./Styled";
import { cardFrontImage } from "../utils/constants";
import CubeItemEnd from "./CubeItemEnd";

const Card = ({item,replaceItems}) => {
  const { src } = item;

  const [isAddActive, setIsAddActive] = useState(false);
  const [handlerCounts, setHandlerCounts] = useState(0);

  const cardHandler = (e) => {
    setIsAddActive(true);

    setHandlerCounts(prev=>prev+1);
    console.log(handlerCounts);
  };

  return (
    <CubeItem
      onClick={cardHandler}
      className={`cube ${isAddActive ? "active-card" : ""}`}
      style={{ order: useMemo(() => replaceItems(item), [item]) }}
    >
      <CubeItemEnd
        itemClassName={"front"}
        src={cardFrontImage}
        name={"card pictures"}
      />
      <CubeItemEnd itemClassName={"back"} src={src} name={"card pictures"} />
    </CubeItem>
    
  );
};

export default Card;
