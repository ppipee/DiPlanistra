import { createGlobalStyle } from 'styled-components'

import { gray } from 'common/styles/colors'
import { setup } from 'common/styles/fonts/setup'

const GlobalStyles = createGlobalStyle`
	${setup}

	body {
		padding: 0;
		margin: 0;
		font-family: 'DB Heavent Now', sans-serif;
		color: ${gray[900]}; 
		min-height:100vh;
	}

	.background-color {
		background-color: ${gray[50]};
	}

	* {
		box-sizing: border-box;
		font-family: 'DB Heavent Now', sans-serif;
	}
	
	#root{
		min-height:100vh;
	}

	a {
		color: inherit;
		text-decoration: none;
	}


`

export default GlobalStyles
