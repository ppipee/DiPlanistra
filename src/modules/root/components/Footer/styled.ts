import styled from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

export const FooterContainer = styled(ContentContainer)`
	width: 100%;
	background: transparent;
	box-sizing: border-box;
	padding: ${spaces(20)} ${spaces(16)};
	/* position: absolute; */
	bottom: 0;

	${media.md`
	  padding: ${spaces(16)};
  `}
`

export const CopyRightText = styled.div`
	position: absolute;
	right: 16px;

	${media.md`
    margin-top: ${spaces(4)};
    position: relative;
    right: auto;
  `}
`
