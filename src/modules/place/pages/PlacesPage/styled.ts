import styled, { css } from 'styled-components'

import ContentContainer from 'common/components/ContentContainer'

const FILTER_WIDTH = '240px'
const SUB_SECTION_WIDTH = '200px'
const CONTENT_WIDTH = '948px'

type ContainerProps = {
	type: 'filter' | 'main' | 'sub'
}

function applyContainerType({ type }: ContainerProps) {
	if (type === 'filter') {
		return css`
			position: relative;
			width: ${FILTER_WIDTH};
		`
	} else if (type === 'sub') {
		return css`
			width: ${SUB_SECTION_WIDTH};
		`
	}

	return css`
		flex: 1;
		width: 100%;
	`
}

export const ContainerWrapper = styled.div`
	${applyContainerType}
`

export const Container = styled(ContentContainer)`
	max-width: ${CONTENT_WIDTH};
`
