import styled, { css } from 'styled-components'

import Block from 'common/components/Block'
import { media } from 'common/styles/utils/viewport'

import { ResponsiveBlockProps, Variant } from './types'

const mediaVariant = ({
	$variant = Variant.TABLET,
	$paddingMobile,
	$marginMobile = '0',
}: ResponsiveBlockProps) => media[$variant]`
		border-radius: 0;
		box-shadow: none;

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

const ResponsiveBlock = styled(Block)`
	${mediaVariant}
`

export default ResponsiveBlock
