import React from 'react'
import styled from 'styled-components'
import {setColor} from '../../style'


export default function Input({leadingIcon, trailingIcon, type, placeholder, onChange}) {

    const focusHandle = (e) => {
        e.target.previousSibling.style.fill = `${setColor.primaryColor}`
    }

    const onBlurHandler = (e) => {
        e.target.previousSibling.style.fill = `${setColor.darckGray}`
    }
    
    return (
        <DivWraper id="InputDivWraper">
            {leadingIcon}   
            <InputWraper type={type} placeholder={placeholder} 
            onFocus={focusHandle}
            onBlur = {onBlurHandler}
            onChange = {(e) => onChange(e)}
            ></InputWraper>
            {trailingIcon}
        </DivWraper>
    )
}
const DivWraper = styled.div`
border: 1px solid ${setColor.primaryColor};
display: flex;
align-items: center;
background: white;
padding: 4px 8px;
border-radius: 30px;
margin-bottom: 8px;
width: 250px;
& svg{
    fill: ${setColor.darckGray}
}
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
font-size: 26px;
`
