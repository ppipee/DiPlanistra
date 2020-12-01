import Slick from 'react-slick'
import styled, { createGlobalStyle, css } from 'styled-components'

import { black } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'

import { SheetProps } from './types'

interface SlickStyleProps {
	$dotColor: string
}

export const SlickBaseStyle = createGlobalStyle<SheetProps>`
	${({ slickSheet, slickThemeSheet }) => css`
		@import ${slickSheet};
		@import ${slickThemeSheet};
	`}
`

function applySlickDot({ $dotColor = black }: SlickStyleProps) {
	return css`
		.slick-dots {
			bottom: 12px;

			button::before {
				font-size: ${fontSizes(8)};
				color: ${$dotColor} !important;
			}
		}
	`
}

function applySlickArrow() {
	return css`
		.slick-arrow {
			&::before {
				color: ${black};
				font-size: ${fontSizes(24)};
			}
		}
	`
}

export const SlickStyle = styled(Slick)`
	${applySlickDot}
	${applySlickArrow}
`
