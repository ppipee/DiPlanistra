import BaseLoader from 'react-loader-spinner'
import styled from 'styled-components'

import ZIndexes from 'common/styles/mixins/zIndexes'

export const Loader = styled(BaseLoader)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: ${ZIndexes.HighPriorityModal};

	display: flex;
	align-items: center;
	justify-content: center;
`
