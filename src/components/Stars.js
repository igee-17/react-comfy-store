import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  let starArray = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars > index + 1 ? (
          <BsStarFill />
        ) : stars > index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  // starArray = starArray.reduce((total, _, index) => {
  //   if (stars > index + 1) {
  //     return [...total, <BsStarFill />];
  //   } else if (stars > index + 0.5) {
  //     return [...total, <BsStarHalf />];
  //   } else {
  //     return [...total, <BsStar />];
  //   }
  // }, []);
  // console.log(starArray);

  return (
    <Wrapper>
      <div className="stars">{starArray}</div>
      <p className="review">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
