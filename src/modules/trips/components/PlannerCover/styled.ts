import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import CoverBackground from 'common/components/CoverBackground'
import { black } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

export const Container = styled(ContentContainer)`
	padding: ${spaces(16)} ${spaces(12)};
	flex: 1;
	display: flex;
`

export const IconWrapper = styled.div`
	svg {
		-webkit-filter: drop-shadow(0px 3px 3px ${getColorWithAlpha(black, 0.24)});
		filter: drop-shadow(0px -3px -3px ${getColorWithAlpha(black, 0.24)});
	}
`

export const ArrowWrapper = styled.div`
	transform: rotate(180deg);
	svg {
		-webkit-filter: drop-shadow(0px -3px -3px ${getColorWithAlpha(black, 0.24)});
		filter: drop-shadow(0px -3px -3px ${getColorWithAlpha(black, 0.24)});
	}
`

export const Background = styled(CoverBackground)`
	display: flex;
`
