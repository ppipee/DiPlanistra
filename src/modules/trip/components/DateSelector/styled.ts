import styled from 'styled-components'

import BaseDropDown from 'common/components/DropDown'
import { white } from 'common/styles/colors'

export const DropDown = styled(BaseDropDown)`
	color: ${white};
	border-color: ${white};

	svg {
		color: ${white};
	}
`
