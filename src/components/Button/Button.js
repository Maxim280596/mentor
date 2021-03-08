import React from 'react';
import styled from 'styled-components';

const SendButton = styled.button`
    background-color: grey;
    font-size: 14px;
    margin: 10px 0px 10px 0px;
`;

const Button = (props) => {
    return (
        <SendButton type={props.type} className='btn blue-grey'>
            Send
        </SendButton>
    );
};

export default Button;
