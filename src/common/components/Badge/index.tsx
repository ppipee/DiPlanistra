import styled, { css } from 'styled-components'

import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { BadgeProps, BadgeVariant } from './types'

const BADGE_HEIGHT = '20px'

function applyBadgeVariant({ $variant, $color, $secondColor }: BadgeProps) {
	if ($variant === BadgeVariant.Outlined) {
		return css`
			border: 1px solid ${$color};
			color: ${$color};
		`
	}

	return css`
		color: ${white};
		background: linear-gradient(90deg, ${$color} 0%, ${$secondColor || $color} 92.77%);
	`
}

export const Badge = styled.div`
	height: ${BADGE_HEIGHT};
	border-radius: ${Borders.Large};
	box-sizing: border-box;
	display: flex;
	align-items: center;
	padding: ${spaces(4)} ${spaces(8)};
	font-size: ${fontSizes(10)};

	${applyBadgeVariant}
`

Badge.defaultProps = {
	$variant: BadgeVariant.Filled,
}
