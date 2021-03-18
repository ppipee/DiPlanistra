import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import { main, white } from 'common/styles/colors'
import { NAV_HEIGHT } from 'common/styles/constants'
import spaces from 'common/styles/mixins/spaces'
import ZIndexes from 'common/styles/mixins/zIndexes'
import { media } from 'common/styles/utils/viewport'

const LOGO_HEIGHT = '22px'

export const NavTemplate = styled.div`
	width: 100%;
	height: ${NAV_HEIGHT};
	background-color: ${main[500]};
`
export const NavWrapper = styled(NavTemplate)`
	position: fixed;
	z-index: ${ZIndexes.Nav};
`

export const NavContainer = styled(ContentContainer)`
	height: 100%;
	display: flex;
	color: ${white};
	padding: 0 ${spaces(24)};

	${media.md`
		padding: 0 ${spaces(16)};
	`}
`

export const SearchContainer = styled(Gap)`
	flex: 1;
`

export const Logo = styled.img`
	height: ${LOGO_HEIGHT};
	display: block;
`
