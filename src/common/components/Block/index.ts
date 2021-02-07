import styled from 'styled-components'

import { gray, white } from 'common/styles/colors'
import borders from 'common/styles/mixins/borders'

import { BlockShadow } from '../BlockShadow'

import { BlockProps } from './types'

const Block = styled(BlockShadow)<BlockProps>`
	width: 100%;
	background: ${white};
	border: 1px solid ${gray[50]};
	border-radius: ${({ $borderRadius = borders.Large }) => $borderRadius};
	padding: ${({ $padding = '0' }) => $padding};
	margin: ${({ $margin = '0' }) => $margin};
	box-sizing: border-box;
`

export default Block
