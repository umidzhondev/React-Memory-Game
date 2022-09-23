import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { cardFrontImage } from "../utils/constants";

const Card = ({ item, replaceItems }) => {
  const { src } = item;

  const [isAddActive, setIsAddActive] = useState(false);
  const [handlerCounts, setHandlerCounts] = useState(0);

  const cardHandler = (e) => {
    // setIsAddActive(true);

    setHandlerCounts((prev)=>prev+1);
    console.log(handlerCounts);

  };

  

  return (
    <CubeItem
      onClick={cardHandler}
      className={`cube ${isAddActive ? "active-card" : ""}`}
      style={{ order: useMemo(() => replaceItems(item), [item]) }}
    >
      <div className="cube__item front">
        <img src={cardFrontImage} alt="card pictures" />
      </div>
      <div className="cube__item back">
        <img src={src} alt="card pictures" />
      </div>
    </CubeItem>
  );
};

const CubeItem = styled.li`
  margin: auto;
  position: relative;
  width: 200px;
  height: 160px;
  transform-style: preserve-3d;
  transition: transform 2s ease;
  list-style-type: none;
  cursor: pointer;
  outline: 3px solid #fff;

  & > div {
    position: absolute;
    background-color: aliceblue;
    width: inherit;
    height: inherit;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.active-card {
    transform: rotateY(180deg);
  }

  .front {
    transform: translate3d(0, 0, 1px);
  }

  .back {
    transform: translate3d(0, 0, -1px) rotateY(180deg);
  }
`;

export default Card;
