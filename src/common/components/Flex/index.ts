import styled, { css } from 'styled-components'

export type JustifyContentType = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'

export type AlignItemsType = 'flex-start' | 'flex-end' | 'center' | 'stretch'

export type DirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export interface FlexProps {
	$justifyContent?: JustifyContentType | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
	$alignItems?: AlignItemsType | 'flex-start' | 'flex-end' | 'center' | 'stretch'
	$direction?: DirectionType | 'row' | 'row-reverse' | 'column' | 'column-reverse'
	$wrap?: 'nowrap' | 'wrap'
	$margin?: string
	$padding?: string
}

function defineProps({ $margin: margin, $padding: padding }: FlexProps) {
	let styled = ''

	if (margin) {
		styled += css`
			margin: ${margin};
		`
	}

	if (padding) {
		styled += css`
			padding: ${padding};
		`
	}

	return styled
}

const Flex = styled.div<FlexProps>`
	display: flex;
	justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
	align-items: ${({ $alignItems }) => $alignItems || 'flex-start'};
	flex-direction: ${({ $direction }) => $direction || 'row'};
	flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};

	${defineProps}
`
export default Flex
