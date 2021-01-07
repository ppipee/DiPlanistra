import styled from 'styled-components'

import { gray } from 'common/styles/colors'

import BaseContainer from '../BaseContainer'

type Props = {
	$spacing?: string
	$spacingTop?: string
	$spacingBottom?: string
	$color?: string
	$thickness?: string
}

const SeparatorContainer = styled(BaseContainer)<Props>`
	& > *::after {
		display: block;
		content: '';
		width: 100%;
		margin: ${({ $spacing = 0, $spacingBottom, $spacingTop }) =>
			`${$spacingTop || $spacing} 0 ${$spacingBottom || $spacing}`};
		border-bottom: ${({ $thickness = '1px', $color = gray[200] }) => `${$thickness} solid ${$color}`};
	}
	& > *:last-child::after {
		margin: 0;
		border: none;
	}
`

export default SeparatorContainer
