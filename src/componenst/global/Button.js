import React from 'react'
import styled from 'styled-components'
import { setColor } from '../../style' 

export default function Button({title}) {
    return (
        <ButtonWraper>{title}</ButtonWraper>
    )
}

const ButtonWraper = styled.button`
color: ${setColor.mainWhite};
background: ${setColor.primaryColor};
border-radius: 20px;
padding: 4px 8px;
outline: none
`