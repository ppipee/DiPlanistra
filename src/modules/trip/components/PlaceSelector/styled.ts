import styled, { css } from 'styled-components'

import BaseContainer from 'common/components/BaseContainer'
import Flex from 'common/components/Flex'
import { gray, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'

type Props = {
	$isOpen: boolean
}

function applyState({ $isOpen }: Props) {
	if (!$isOpen) return null

	return css`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	`
}

export const ArrowContainer = styled(Flex)`
	box-sizing: border-box;
	background-color: ${white};
	padding: ${spaces(8)};
	border: 1px solid ${gray[200]};
	border-radius: 0 ${Borders.Large} ${Borders.Large} 0;
	border-left: 0;

	${applyState}
`

export const PlaceSelectedContainer = styled(BaseContainer)`
	box-sizing: border-box;
	flex: 1;
	border: 1px solid ${gray[200]};
	border-radius: ${Borders.Large} 0 0 ${Borders.Large};
	background-color: ${white};

	${applyState}
`
