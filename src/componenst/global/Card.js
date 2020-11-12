import React from 'react'
import styled from 'styled-components'

function Card({className, children}) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export const CardWraper = styled(Card)`
background: #fff;
border-radius: 2px;
display: inline-block;
height: 400px;
width: 300px;
margin: 1rem;
position: relative;
position: fixed;


@media (max-width: 420px){
  width: 98vw;
  height: 98vh;
}
`

export const Card2Wraper = styled(CardWraper)`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

export const Card3Wraper = styled(CardWraper)`
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`