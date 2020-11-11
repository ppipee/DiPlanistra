import styled from 'styled-components'

import { gray, red } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

export const ErrorText = styled.div`
	margin-top: ${spaces(4)};
	color: ${red[700]};
`

export const FieldContainer = styled.label`
	display: flex;
	flex-direction: column;
`

export const LabelText = styled.span`
	color: ${gray[900]};
	margin-bottom: ${spaces(8)};
`
