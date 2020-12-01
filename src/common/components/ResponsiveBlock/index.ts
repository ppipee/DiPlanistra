import styled, { css } from 'styled-components'

import { white } from 'common/styles/colors'
import borders from 'common/styles/mixins/borders'
import { media } from 'common/styles/utils/viewport'

import { BlockShadow } from '../BlockShadow'

import { ResponsiveBlockProps, Variant } from './types'

const mediaVariant = ({ $variant = Variant.TABLET, $paddingMobile }: ResponsiveBlockProps) => media[$variant]`
		border-radius: 0;
		box-shadow: none;

		${
			$paddingMobile &&
			css`
				padding: ${$paddingMobile};
			`
		}
	`

const ResponsiveBlock = styled(BlockShadow)`
	width: 100%;
	background: ${white};
	border-radius: ${({ $borderRadius = borders.Large }) => $borderRadius};
	padding: ${({ $padding = 0 }) => $padding};
	box-sizing: border-box;

	${mediaVariant}
`

export default ResponsiveBlock
