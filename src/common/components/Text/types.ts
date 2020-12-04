export interface TextProps {
	margin?: string | number
	padding?: string | number
	size?: string
	weight?: 'bold' | 'lighter' | 'normal' | number
	family?: string
	decoration?: string
	color?: string
	ellipsis?: number
	lineHeight?: string
	onClick?: () => void
	transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none' | 'full-width'
	whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'initial' | 'inherit'
	textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit'
	wordWrap?: boolean
	wordBreak?: 'break-word' | 'break-all' | 'unset' | 'initial' | 'inherit' | 'keep-all' | 'normal' | 'revert'
	responsive?: boolean
}
