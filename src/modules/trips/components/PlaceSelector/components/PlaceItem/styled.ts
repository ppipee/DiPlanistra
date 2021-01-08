import styled, { css } from 'styled-components'

import BaseContainer from 'common/components/BaseContainer'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

type ContainerProps = {
	$isSelected: boolean
}

function applyTransparent() {
	return css`
		position: relative;
		&::after {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			content: '';
			background-color: ${getColorWithAlpha(gray[700], 0.2)};
		}
	`
}

export const PlaceItemContainer = styled(BaseContainer).attrs({
	$padding: spaces(10),
})<ContainerProps>`
	&:hover {
		${applyTransparent}
	}
	${({ $isSelected }) => $isSelected && applyTransparent}
`
