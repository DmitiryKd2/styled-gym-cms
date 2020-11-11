import {createGlobalStyle} from 'styled-components'
import {setColor, setFont} from '../../style'


export default createGlobalStyle`
/* ::root{
    --primaryColor: red;
} */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    //add fonts
}
body{ 
    ${setFont.slanted};   
    color: ${setColor.primaryColor}
}
h1{font-size:1.3em; line-height: 1.2; margin-bottom: 0.5em}
/* h2{font-size:1.3em; line-height: 1.2; margin-bottom: 0.5em}
h3{font-size:1.3em; line-height: 1.2; margin-bottom: 0.5em}
h4{font-size:1.3em; line-height: 1.2; margin-bottom: 0.5em}
h5{font-size:1.3em; line-height: 1.2; margin-bottom: 0.5em}
h6{font-size:1.3em; line-height: 1.2; margin-bottom: 0.5em} */
`