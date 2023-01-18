import React from "react";
// import { useState } from "react";
// import Modal from "../UI/Modal";
import styled from 'styled-components'

const ExpenseItem = ({ title, price, date }) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const toggleModalVisible = () => {
  //   setIsModalVisible((prevState) => !prevState);
  // };

  return (
    <>
      {/* {isModalVisible ? <Modal /> : null} */}

      <Card>
        <CardInner>
          <DateBox>{date.toString()}</DateBox>
          <Title>{title}</Title>
        </CardInner>
        <Price>{`$ ${price}`}</Price>
        {/* <button onClick={toggleModalVisible}>DELETE</button> */}
      </Card>
    </>
  );
};

export default ExpenseItem;

const Card = styled.div`
   width: 100%;
  margin-top: 20px;
  padding: 12px 16px;
  background: #4b4b4b;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`

const CardInner = styled.div`
   display: flex;
  align-items: center;
`
const DateBox = styled.p`
    background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: white;
  padding: 8px 20px;
  margin-right: 15px;
`

const Title = styled.p`
    font-weight: 600;
  font-size: 18px;
`

const Price = styled.p`
   background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 20px;
`
