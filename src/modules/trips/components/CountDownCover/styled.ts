import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import { green } from 'common/styles/colors'
import { blockShadow } from 'common/styles/shadows'

const COVER_HEIGHT = '240px'

export const CoverBackground = styled.div`
	width: 100%;
	background: linear-gradient(180deg, ${green[700]} 0%, ${green[500]} 166.19%);
	height: ${COVER_HEIGHT};

	${blockShadow}
`

export const CoverContainer = styled(ContentContainer)`
	height: 100%;
	display: flex;
	align-items: center;
`
