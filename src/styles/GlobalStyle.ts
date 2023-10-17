import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle` 
${reset}

* {
	box-sizing: border-box;
}
    
body {
  font-family: 'Apple SD Gothic Neo', sans-serif;
}

ol, ul {
	list-style: none;
}

a {
	text-decoration: none;
	color: inherit;
}
`;

export default GlobalStyle;
