import React, { Fragment } from 'react';
import styled from 'styled-components';
const FormInput = styled.input `
 width: 200px;
 display: flex;
 margin: 5px 0px;
 font-size: 14px;
`

const Input = ({type, placeholder, className,onChange,value, ref}) => {
    
    return(
        <Fragment>
            <FormInput
            type={type}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
            ref = {ref}
            
            

            />
        </Fragment>
    )
}

export default Input;