import React from 'react'
import styled from 'styled-components'
import { setColor } from '../../style' 

export default function Button({title, onClickHandler}) {
    return (
        <ButtonWraper onClick={onClickHandler}>{title}</ButtonWraper>
    )
}

const ButtonWraper = styled.button`
color: ${setColor.mainWhite};
background: ${setColor.primaryColor};
border-radius: 20px;
padding: 4px 8px;
outline: none;
border: none;
font-size: 24px;
width: 200px;
text-transform: uppercase;
`