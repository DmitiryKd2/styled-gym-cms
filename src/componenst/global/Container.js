import React from 'react'
import styled from 'styled-components'
import {setFlex} from '../../style'

function Container({className, children}) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default styled(Container)`
${setFlex({x: "center", y: "center", flexDirection: "column"})}
`
