import styled, { css } from 'styled-components'

import Gap from 'common/components/Gap'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

const ITEM_HEIGHT = '40px'

type ItemWrapperProps = {
	$active: boolean
}

export const ItemWrapper = styled(Gap)<ItemWrapperProps>`
	height: ${ITEM_HEIGHT};
	width: inherit;
	padding: 0 ${spaces(12)};
	box-sizing: border-box;
	cursor: pointer;

	&:hover {
		background-color: ${gray[50]};
	}
	&:active {
		background-color: ${gray[100]};
	}

	${({ $active }) =>
		$active &&
		css`
			background-color: ${gray[100]};
		`}
`
