import styled, { css } from 'styled-components'

import { black, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

import { ButtonBorders, ButtonProps, ButtonSizes, ButtonVariants } from './types'

enum ButtonHeight {
	Default = '28px',
	Large = '40px',
}

function applySize({ $size }: ButtonProps) {
	let defaultStyle = css`
		padding: 0 ${spaces(16)};
		height: ${ButtonHeight.Large};
		font-size: ${fontSizes(18)};
	`

	if ($size === ButtonSizes.Small) {
		defaultStyle = css`
			padding: 0 ${spaces(12)};
			height: ${ButtonHeight.Default};
			font-size: ${fontSizes(14)};
		`
	}

	return defaultStyle
}

function applyVaraint({ $color, $secondaryColor, $variant }: ButtonProps) {
	if ($variant === ButtonVariants.Outlined) {
		return css`
			background: ${white};
			color: ${$color};
			border: 1px solid ${$color};
			transition: background 0.2s;

			svg {
				color: ${$color};
			}
		`
	}

	// default style
	const subColor = $secondaryColor || $color

	return css`
		background: linear-gradient(89.97deg, ${$color} -8.17%, ${subColor} 114.67%);
		color: ${white};
		transition: background 0.1s ease;

		svg {
			color: ${white};
		}
	`
}

function applyResponsive({ $responsive }: ButtonProps) {
	if ($responsive) {
		return css`
			width: 100%;
		`
	}

	return css`
		width: auto;
	`
}

function applyBorderRadius({ $border }: ButtonProps) {
	if ($border === ButtonBorders.Curve) {
		return css`
			border-radius: ${Borders.Curve};
		`
	}

	return css`
		border-radius: ${Borders.Default};
	`
}

function applyShadow({ $shadow }: ButtonProps) {
	if (!$shadow) return null

	return css`
		box-shadow: 0px 2px 2px ${getColorWithAlpha(black, 0.1)};

		&:hover {
			box-shadow: 0px 3px 3px ${getColorWithAlpha(black, 0.1)};
		}
		&:active {
			box-shadow: 0px 3px 3px ${getColorWithAlpha(black, 0.2)};
		}
	`
}

function applyHover() {
	return css`
		& > * {
			position: relative;
		}

		position: relative;

		&::before {
			transition: background 0.1s ease;
			content: '';
			background: transparent;
		}

		&:hover::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: ${getColorWithAlpha(black, 0.2)};

			${applyBorderRadius}
		}
	`
}

const Button = styled.div<ButtonProps>`
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	${applySize};
	${applyVaraint};
	${applyResponsive};
	${applyBorderRadius};
	${applyHover}
	${applyShadow};
`

Button.defaultProps = {
	$size: ButtonSizes.Default,
	$variant: ButtonVariants.Filled,
	$border: ButtonBorders.Default,
	$shadow: true,
}

export default Button
