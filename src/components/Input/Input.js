import React from 'react';
import styled from 'styled-components';
const FormInput = styled.input`
    width: 300px;
    display: flex;
    margin: 5px 0px;
    font-size: 24px;
`;

const Input = ({ type, placeholder, className, onChange, value, name }) => {
    return (
        <FormInput
            type={type}
            placeholder={placeholder}
            name={name}
            className={className}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
