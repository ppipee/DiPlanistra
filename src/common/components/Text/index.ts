import styled, { css } from 'styled-components'

import { TextProps } from './types'

export const ellipsisText = (line: number) => css`
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	${line > 1
		? css`
				display: -webkit-box;
				-webkit-line-clamp: ${line};
				-webkit-box-orient: vertical;
		  `
		: css`
				white-space: nowrap;
		  `};
`

const Text = styled.span<TextProps>`
	${({
		size,
		weight,
		margin,
		padding,
		family,
		decoration,
		color,
		ellipsis,
		lineHeight,
		onClick,
		transform,
		whiteSpace,
		textAlign,
		wordWrap,
		wordBreak,
	}: TextProps) => css`
		word-break: ${wordBreak || 'initial'};
		${size &&
		css`
			font-size: ${size};
		`};
		${weight &&
		css`
			font-weight: ${weight};
		`};
		${margin &&
		css`
			margin: ${margin};
		`};
		${padding &&
		css`
			padding: ${padding};
		`};
		${family &&
		css`
			font-family: ${family};
		`};
		${decoration &&
		css`
			text-decoration: ${decoration};
		`};
		${color &&
		css`
			color: ${color};
		`};
		${ellipsis && ellipsisText(ellipsis)};
		${lineHeight &&
		css`
			line-height: ${lineHeight};
		`};
		${wordWrap &&
		css`
			word-wrap: break-word;
		`};
		${onClick &&
		css`
			cursor: pointer;
		`};
		${transform &&
		css`
			text-transform: ${transform};
		`}
		${whiteSpace &&
		css`
			white-space: ${whiteSpace};
		`};
		${textAlign &&
		css`
			text-align: ${textAlign};
		`};
	`};
`

export default Text
