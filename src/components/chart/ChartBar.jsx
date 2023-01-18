import React from "react";
import styled from "styled-components";

const ChartBar = ({ maxPrice, currentPrice, label }) => {
  const fillHeight = (100 * currentPrice) / maxPrice;

  return (
    <CharBar>
      <CharBarInner>
        <CharBarFill style={{ height: `${fillHeight}%` }}></CharBarFill>
      </CharBarInner>
      <CharBarLabel>{label}</CharBarLabel>
    </CharBar>
  );
};

export default ChartBar;

const CharBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4px;
`;

const CharBarInner = styled.div`
  height: 90%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 4px;
`;

const CharBarFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`;

const CharBarLabel = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
