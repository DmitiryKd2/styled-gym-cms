import React from 'react'
import styled from 'styled-components'
import {setColor} from '../../style'


export default function Input({leadingIcon, trailingIcon, type, placeholder}) {
    return (
        <DivWraper>
            {leadingIcon}   
            <InputWraper type={type} placeholder={placeholder}></InputWraper>
            {trailingIcon}
        </DivWraper>
    )
}
const DivWraper = styled.div`
border: 1px solid ${setColor.primaryColor};
display: inline-block;
background: ${setColor.mainGray};
padding: 4px 8px;
border-radius: 30px;
margin-bottom: 4px;
width: 200px;
/* svg{
    fill: darkgrey;
    
} */

`

const InputWraper = styled.input.attrs((props) => ({
    // type: props.type || 'text',
    // placeholder: props.placeholder || ''
})
)`
margin: 0 6px;
background: transparent;
outline: none;
border: none;
max-width: 150px;

/* &:focus ~ svg{
    fill: blue;
} */
`
