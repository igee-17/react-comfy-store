import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount, stock }) => {
  return (
    <Wrapper>
      <button
        type="button"
        className={`${amount === 1 ? "amount-btns blur" : "amount-btns"}`}
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button
        type="button"
        className={`${amount === stock ? "amount-btns blur" : "amount-btns"}`}
        onClick={increase}
      >
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  /* border: 2px solid red; */
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 1rem;
    height: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blur {
    color: var(--clr-grey-7);
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
