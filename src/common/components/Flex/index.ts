import { Property } from 'csstype'
import styled from 'styled-components'
import { css } from 'styled-components'

export interface FlexProps {
	$justifyContent?: Property.JustifyContent
	$alignItems?: Property.AlignItems
	$direction?: Property.FlexDirection
	$wrap?: Property.FlexWrap
	$margin?: string
	$padding?: string
	$responsive?: boolean
	$grow?: Property.FlexGrow
}

function defineProps({
	$margin: margin,
	$padding: padding,
	$responsive: responsive,
	$grow: grow,
	$direction: direction,
}: FlexProps) {
	let styled = css``

	if (margin) {
		styled = css`
			${styled}
			margin: ${margin};
		`
	}

	if (padding) {
		styled = css`
			${styled}
			padding: ${padding};
			box-sizing: border-box;
		`
	}

	if (responsive) {
		styled = css`
			${styled}
			width: 100%;
		`
	}
	if (responsive && (direction === 'column' || direction === 'column-reverse')) {
		styled = css`
			${styled}
			height: 100%;
		`
	}

	if (grow) {
		styled = css`
			${styled}
			flex-grow:${grow};
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
