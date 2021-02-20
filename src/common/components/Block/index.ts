import styled from 'styled-components'

import { BlockShadow } from 'common/components/BlockShadow'
import { gray, white } from 'common/styles/colors'
import borders from 'common/styles/mixins/borders'
import { media } from 'common/styles/utils/viewport'

import { BlockProps } from './types'

const Block = styled(BlockShadow)<BlockProps>`
	width: 100%;
	background: ${white};
	border: 1px solid ${gray[50]};
	border-radius: ${({ $borderRadius = borders.Large }) => $borderRadius};
	padding: ${({ $padding = '0' }) => $padding};
	margin: ${({ $margin = '0' }) => $margin};
	box-sizing: border-box;

	${media.md`
		border-left: 0;
		border-right: 0;
	`}
`

export default Block
