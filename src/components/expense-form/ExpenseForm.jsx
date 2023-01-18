import React from "react";
import { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/form-input/FormInput";
import styled from "styled-components";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("дд.мм.гггг");

  const canselHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(value);
    }
  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const isFilledFields = title && date && price;

  const saveHandler = (event) => {
    event.preventDefault();

    if (isFilledFields) {
      const expenseData = {
        title,
        date,
        price,
      };
      props.onNewExpenseAdd(expenseData);
      setTitle("");
      setPrice("");
      setDate("");
    }
  };

  return (
    <StyledForm>
      <InputsWrapper>
        <FormInput
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите название"
          value={title}
          onChange={titleInputChangeHandler}
        />
        <FormInput
          id="price"
          labelName="Стоимость"
          inputType="number"
          placeholder="0"
          value={price}
          onChange={priceInputChangeHandler}
        />
        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
          min="2019-01-01"
          max="2023-12-31"
          value={date}
          onChange={dateInputChangeHandler}
        />
      </InputsWrapper>
      <BtnWrapper>
        <Button onClick={canselHandler}>Отмена</Button>
        <Button disabled={!isFilledFields} onClick={saveHandler}>
          Добавить расход
        </Button>
      </BtnWrapper>
    </StyledForm>
  );
};

export default ExpenseForm;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
