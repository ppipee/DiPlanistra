import styled from 'styled-components'

import BaseContainer from 'common/components/BaseContainer'
import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import { gray, green, main, white } from 'common/styles/colors'
import { NAV_HEIGHT } from 'common/styles/constants'
import { svgShadow } from 'common/styles/shadows'

export const EditorContainer = styled(Gap)`
	overflow-y: auto;
	flex: 1;
	background-color: ${gray[50]};
`

export const ArrowWrapper = styled.div`
	transform: rotate(180deg);
	${svgShadow}
`

export const NavBar = styled(BaseContainer)`
	display: flex;
	height: ${NAV_HEIGHT};
	background: linear-gradient(180deg, ${main[700]} 0%, ${green[500]} 166.19%);
`

export const ContainerWrapper = styled.div`
	background-color: ${white};
`

export const DayWrapper = styled(ResponsiveBlock)`
	flex: 1;
	height: 100%;
`
