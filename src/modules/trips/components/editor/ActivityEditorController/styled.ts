import styled from 'styled-components'

import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

export const ButtonContainer = styled.div`
	box-sizing: border-box;
	border-top: 1px solid ${gray[100]};
	margin-top: ${spaces(48)};
	width: 100%;
`
