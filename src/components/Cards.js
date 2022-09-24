import React, { useState } from "react";
import Card from "./Card";
import { images as cardItems } from "../utils/constants";
import { Wrapper } from "./Styled";

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



export default Cards;
