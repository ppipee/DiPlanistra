import styled from 'styled-components'

import { hardShadow, shadow, blockShadow } from 'common/styles/shadows'

import { BlockShadowProps, Shadow } from './types'

function variantShadow({ $variant }: BlockShadowProps) {
	if ($variant === Shadow.Hard) {
		return hardShadow
	} else if ($variant === Shadow.Default) {
		return shadow
	}

	return blockShadow
}

export const BlockShadow = styled.div<BlockShadowProps>`
	${variantShadow}
`
