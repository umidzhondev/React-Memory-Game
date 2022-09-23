import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { images as cardItems } from "../utils/constants";

const Cards = () => {
  const images = cardItems[0].aviation;
  const imagesClone = [...images];
  const [data, setData] = useState(images.concat(imagesClone));
  const [checkedItems, setCheckedItems] = useState([]);

  const getRandomIndex = () => {
    const lengthImagesIndex = [];
    for (let i = 0; i < images.length; i++) {
      lengthImagesIndex.push(i);
    }
    let randomIndex =
      lengthImagesIndex[Math.round(Math.random() * lengthImagesIndex.length)];
    return randomIndex;
  };


  return (
    <Wrapper>
      <ul className="cards">
        {data.map((item, index) => {
          return <Card key={index}  replaceItems={getRandomIndex} item={item} />;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:100vh;
}  .cards{
    max-width: 1000px;
    margin-inline:auto;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4,1fr);
    grid-gap:20px;
    perspective:600px;
  }
`;

export default Cards;
