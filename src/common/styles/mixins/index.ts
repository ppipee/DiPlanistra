import { createGlobalStyle, css } from 'styled-components'

import { Spaces } from './spaces'

const generateMargin = () => {
	const marginTemplate = ['top', 'left', 'bottom', 'right']
	let margin = ''

	for (const position of marginTemplate) {
		for (const key in Spaces) {
			margin += `.margin-${position}-${key}{
        margin-${position} : ${Spaces[key]};
      }`
		}
	}
	return css`
		${margin}
	`
}

export const MixinsGlobalStyles = createGlobalStyle`
  ${generateMargin}
`
