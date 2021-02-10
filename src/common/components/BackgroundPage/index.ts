import { Property } from 'csstype'
import { createGlobalStyle, css } from 'styled-components'

type Props = {
	$background?: Property.Background
	$footerColor?: string
}

export const BackgroundPage = createGlobalStyle<Props>`
	${({ $background }) =>
		$background &&
		css`
			.background-color {
				background: ${$background};
			}
		`};
			
	${({ $footerColor }) =>
		$footerColor &&
		css`
			.footer-color {
				color: ${$footerColor};
			}
		`};
`
