import React from "react";
import styled from "styled-components";

const ExpensesFilter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>Filter by year</FilterLabel>
      <FilterSelect value={value} onChange={onChange}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </FilterSelect>
    </FilterContainer>
  );
};

export default ExpensesFilter;

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterLabel = styled.label`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const FilterSelect = styled.select`
  padding: 12px 24px;
  width: 124px;
  height: 43px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  color: #222222;
`;
