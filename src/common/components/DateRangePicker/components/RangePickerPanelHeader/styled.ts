import styled from 'styled-components'

import { gray } from 'common/styles/colors'

export const DateInputWrapper = styled.div`
	input,
	svg {
		pointer-events: none;
	}

	input:focus {
		border: 1px solid ${gray[300]};
		box-shadow: none;
	}
`
