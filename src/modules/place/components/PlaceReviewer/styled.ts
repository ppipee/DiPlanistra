import styled from 'styled-components'

import ResponsiveBlock from 'common/components/ResponsiveBlock'
import { main } from 'common/styles/colors'

const CONTAINER_MAX_WIDTH = '768px'

export const Container = styled(ResponsiveBlock)`
	margin: auto;
	width: 100%;
	/* max-width: ${CONTAINER_MAX_WIDTH}; */
	background: linear-gradient(169.17deg, ${main[300]} 0%, ${main[100]} 99.38%);
`
