import { createGlobalStyle } from 'styled-components'

import { gray } from 'common/styles/colors'
import { setupFont } from 'common/styles/fonts/setupFont'

const GlobalStyles = createGlobalStyle`
	${setupFont}

	body {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'Lexend Deca', sans-serif;
		color: ${gray[900]}; 
	}

	a {
		color: inherit;
		text-decoration: none;
	}


`

export default GlobalStyles
