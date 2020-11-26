import styled from 'styled-components'

import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

export const InputWrapper = styled.div`
	input {
		border-color: transparent;
		padding-left: ${spaces(48)};
		border-radius: ${Borders.HalfCircle};
		background-color: ${getColorWithAlpha(white, 0.33)};
	}
`
