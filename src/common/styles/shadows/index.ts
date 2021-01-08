import { css } from 'styled-components'

import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

import { black } from '../colors'

export const shadow = css`
	box-shadow: 0px 3px 3px ${getColorWithAlpha(black, 0.24)}, 0px 0px 3px ${getColorWithAlpha(black, 0.12)};
`

export const hardShadow = css`
	box-shadow: 0px 6px 6px ${getColorWithAlpha(black, 0.24)}, 0px 0px 6px ${getColorWithAlpha(black, 0.12)};
`

export const blockShadow = css`
	box-shadow: 0px 2px 2px ${getColorWithAlpha(black, 0.1)};
`

export const svgShadow = css`
	svg path {
		-webkit-filter: drop-shadow(0px -3px -3px ${getColorWithAlpha(black, 0.24)});
		filter: drop-shadow(0px -3px -3px ${getColorWithAlpha(black, 0.24)});
	}
`
