import React, {Fragment} from 'react';
import styled from 'styled-components';


const SendButton = styled.button `
 background-color: grey;
 font-size:14px;
 margin: 10px 0px 10px 0px;
`

const Button = (props) => {
    return(
        <Fragment>
        <SendButton type={props.type} >Send</SendButton>
        </Fragment>
    )
}


export default Button