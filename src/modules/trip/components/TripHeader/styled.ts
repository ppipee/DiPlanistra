import styled from 'styled-components'

import Flex from 'common/components/Flex'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

export const ControllerContainer = styled(Flex)`
	margin-top: ${spaces(16)};

	${media.md`
    margin-top: ${spaces(12)};
  `}
`
