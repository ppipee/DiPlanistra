import styled from 'styled-components'

import { white } from 'common/styles/colors'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

const DROP_DOWN_WIDTH = '220px'

export const DropDownWrapper = styled.div`
	width: ${DROP_DOWN_WIDTH};
	& > div {
		color: ${white};

		& > :first-child {
			background-color: ${getColorWithAlpha(white, 0.3)};
			border-color: transparent;
		}
	}

	svg {
		color: ${white} !important;
	}
`

export const DropDownItemWrapper = styled.div``
