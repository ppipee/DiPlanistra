import styled from 'styled-components'

import { gray, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

export const DesktopInputWrapper = styled.div`
	input {
		color: ${white};
		border-color: transparent;
		border-radius: 0 ${Borders.Curve} ${Borders.Curve} 0;
		background-color: ${getColorWithAlpha(white, 0.33)};
	}
`

export const MobileInputWrapper = styled.div`
	input {
		border-radius: ${Borders.Normal};
		border: 1px solid ${gray[200]};
	}
`
