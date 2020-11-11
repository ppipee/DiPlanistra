import styled, { css } from 'styled-components'

import { SeparatorLineStyledProps, Variant } from './types'

const variantStyle = ({
	$thickness,
	$color,
	$spacing = '0px',
}: {
	$thickness: string
	$color: string
	$spacing?: string
}) => ({
	[Variant.VERTICAL]: css`
		display: inline-flex;
		border-left: ${$thickness} solid ${$color};
		margin: 0 ${$spacing} !important;
		height: 100%;
	`,
	[Variant.HORIZONTAL]: css`
		border-top: ${$thickness} solid ${$color};
		margin: ${$spacing} 0 !important;
		width: 100%;
	`,
	[Variant.VERTICAL_CUSTOM_SPACE]: css`
		border-top: ${$thickness} solid ${$color};
		margin: ${$spacing};
		height: 100%;
	`,
	[Variant.HORIZONTAL_CUSTOM_SPACE]: css`
		border-top: ${$thickness} solid ${$color};
		margin: ${$spacing};
		width: 100%;
	`,
})

function applyStyles(props: SeparatorLineStyledProps) {
	const { $variant, ...rest } = props
	return variantStyle({ ...rest })[$variant]
}

export const StyledSeparatorLine = styled.div<SeparatorLineStyledProps>`
	${applyStyles};
`
