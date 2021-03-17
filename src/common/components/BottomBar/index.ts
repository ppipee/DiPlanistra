import styled from 'styled-components'

import { white } from 'common/styles/colors'
import { Spaces } from 'common/styles/mixins/spaces'
import ZIndexes from 'common/styles/mixins/zIndexes'

const BottomBar = styled.div`
	position: fixed;
	z-index: ${ZIndexes.BottomBar};
	bottom: 0;
	left: 0;
	right: 0;
	padding: ${Spaces[8]};
	background-color: ${white};
`

export default BottomBar
