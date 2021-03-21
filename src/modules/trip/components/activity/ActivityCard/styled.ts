import styled, { css } from 'styled-components'

import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import { blockShadow } from 'common/styles/shadows'

const MAX_CARD_WIDTH = '650px'

type Props = {
	$isEditMode: boolean
}

function applyCardStyle({ $isEditMode }: Props) {
	if ($isEditMode) return ''

	return css`
		box-sizing: border-box;
		padding: ${spaces(12)};
		background-color: ${white};
		border-radius: ${Borders.Extra};

		${blockShadow}
	`
}

export const CardContainer = styled.div`
	width: 100%;
	max-width: ${MAX_CARD_WIDTH};

	${applyCardStyle}
`
