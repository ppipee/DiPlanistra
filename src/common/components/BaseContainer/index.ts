import styled, { css } from 'styled-components'

import { media } from 'common/styles/utils/viewport'

import { BaseContainerProps } from './types'

const mediaVariant = ({ $screen = 'md', $marginMobile, $paddingMobile }: BaseContainerProps) => media[$screen]`
		${
			$paddingMobile
				? css`
						padding: ${$paddingMobile};
				  `
				: ''
		}
		${
			$marginMobile
				? css`
						margin: ${$marginMobile};
				  `
				: ''
		}
	`

const BaseContainer = styled.div`
	width: inherit;
	height: inherit;
	box-sizing: border-box;
	padding: ${({ $padding = 0 }) => $padding};
	margin: ${({ $margin = '0' }) => $margin};

	${mediaVariant}
`

export default BaseContainer
