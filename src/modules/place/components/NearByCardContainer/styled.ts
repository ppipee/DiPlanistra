import styled from 'styled-components'

import Flex from 'common/components/Flex'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

export const Container = styled(Flex)`
	flex-wrap: wrap;

	${media.md`
  	overflow-x: scroll;
    flex-wrap: nowrap;
  `}
	padding:${spaces(12)} 0 ${spaces(12)} ${spaces(12)};

	& > div:last-child {
		padding-right: 0;
	}
`

export const CardWrapper = styled.div`
	padding: ${spaces(4)} ${spaces(6)};
`
