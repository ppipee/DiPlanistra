import styled from 'styled-components'

import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

export const InputWrapper = styled.div`
	input {
		color: ${white};
		border-color: transparent;
		border-radius: 0 ${Borders.Curve} ${Borders.Curve} 0;
		background-color: ${getColorWithAlpha(white, 0.33)};
	}
`

const DROP_DOWN_WIDTH = '140px'

export const DropDownWrapper = styled.div`
	width: ${DROP_DOWN_WIDTH};
	& > div {
		color: ${white};

		& > :first-child {
			background-color: ${getColorWithAlpha(white, 0.3)};
			border-color: transparent;
			border-top-right-radius: 0px;
			border-bottom-right-radius: 0px;
		}
	}

	svg {
		color: ${white} !important;
	}
`
