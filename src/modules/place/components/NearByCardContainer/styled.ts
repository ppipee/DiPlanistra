import styled from 'styled-components'

import Flex from 'common/components/Flex'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

export const Container = styled(Flex)`
	padding: ${spaces(12)} 0 ${spaces(12)} ${spaces(12)};
	flex-wrap: wrap;
	box-sizing: border-box;

	${media.md`
  	overflow-x: scroll;
    flex-wrap: nowrap;
  `}

	& > div:last-child {
		padding-right: 0;
	}
`

export const CardWrapper = styled.div`
	padding: ${spaces(4)} ${spaces(6)};
`
