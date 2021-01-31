import { Property } from 'csstype'
import { createGlobalStyle, css } from 'styled-components'

type Props = {
	$background?: Property.Background
}

export const BackgroundPage = createGlobalStyle<Props>`
	.background-color{
		${({ $background }) =>
			$background &&
			css`
				background: ${$background};
			`};
	}
`
