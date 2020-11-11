import styled from 'styled-components'
import headerBg from '../../images/header_bg.jpg'
import {setFlex} from '../../style'

export default styled.header`
height: 100vh;
background: url(${props => props.img || headerBg});
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
${setFlex('center', 'center')}
`

