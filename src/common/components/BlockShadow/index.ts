import styled from 'styled-components'

import { hardShadow, shadow } from 'common/styles/shadows'

import { BlockShadowProps, Shadow } from './types'

function variantShadow({ $variant }: BlockShadowProps) {
	if ($variant === Shadow.Hard) {
		return hardShadow
	}

	return shadow
}

export const BlockShadow = styled.div<BlockShadowProps>`
	${variantShadow}
`
