import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import { main, white } from 'common/styles/colors'
import { NAV_HEIGHT } from 'common/styles/constants'
import ZIndexes from 'common/styles/mixins/zIndexes'

export const NavTemplate = styled.div`
	width: 100vw;
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
`

export const SearchContainer = styled(Gap)`
	flex: 1;
`
