import styled from 'styled-components'

import { white } from 'common/styles/colors'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

const DROP_DOWN_WIDTH = '140px'
const MOBILE_DROP_DOWN_WIDTH = '120px'

export const DropDownDesktopWrapper = styled.div`
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

export const DropdownMobileWrapper = styled.div`
	width: ${MOBILE_DROP_DOWN_WIDTH};
`
