import styled, { css } from 'styled-components'

import { gray } from 'common/styles/colors'
import { Spaces } from 'common/styles/mixins/spaces'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

type Props = {
	$size?: number
}

const IconButton = styled.span<Props>`
	padding: ${Spaces[4]};
	border-radius: 50%;
	background-color: ${getColorWithAlpha(gray[100], 0.3)};
	transition: all 0.15s;
	box-sizing: content-box;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		background-color: ${getColorWithAlpha(gray[100], 0.5)};
	}
	:focus {
		background-color: ${getColorWithAlpha(gray[100], 0.7)};
	}

	${({ $size }) =>
		$size &&
		css`
			height: ${$size}px;
			width: ${$size}px;
		`}
`

export default IconButton
