import React from "react";
import styled from "styled-components";

const FormInput = ({ id, labelName, inputType, placeholder, ...rest }) => {
  return (
    <FormInputContainer>
      <StyledLabel htmlFor={id}>{labelName}</StyledLabel>
      <StyledInput
        type={inputType}
        id={id}
        placeholder={placeholder || "..."}
        {...rest}
      />
    </FormInputContainer>
  );
};

export default FormInput;

const FormInputContainer = styled.div`
  padding: 0 10px;
  width: 340px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: normal;
  color: #000000;
`
const StyledInput = styled.input`
   margin-top: 8px;
  padding: 10px 20px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: none;
`