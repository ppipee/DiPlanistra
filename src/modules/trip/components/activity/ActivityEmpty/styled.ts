import styled from 'styled-components'

import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Borders from 'common/styles/mixins/borders'

const CARD_HEIGHT = '200px'
const CARD_MAX_WIDTH = '600px'

export const Container = styled(ResponsiveBlock)`
	border-radius: ${Borders.Extra};
	width: 100%;
	max-width: ${CARD_MAX_WIDTH};
	height: ${CARD_HEIGHT};
	display: flex;
	align-items: stretch;
	margin: 0 auto;
`
