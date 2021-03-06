import styled from 'styled-components'
import headerBg from '../../images/header_bg.jpg'
import {setFlex, setColor} from '../../style'

export default styled.header`
height: 100vh;
/* background: url(${props => props.img || headerBg}); */
background: ${setColor.mainGray};
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
${setFlex({x: 'center', y: 'center'})}
`

