import styled from 'styled-components'

import Gap from 'common/components/Gap'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

const TAB_HEIGHT = '44px'

export const Container = styled(Gap)`
	height: ${TAB_HEIGHT};
	width: 100%;
	border-bottom: 1px solid ${gray[100]};
	padding: 0 ${spaces(12)};
	box-sizing: border-box;
`
