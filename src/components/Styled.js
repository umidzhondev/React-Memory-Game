import styled from "styled-components";

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

export {
  Wrapper,
  CubeItem
};
