import React from 'react';
import styled from 'styled-components'

const Button = ({children, ...props}) => {
    return (
        <StyledButton className='btn' {...props}>{children}</StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
    margin: 7px;
    background-color: #4A026B;
    color: white;
    padding: 12px 20px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
`