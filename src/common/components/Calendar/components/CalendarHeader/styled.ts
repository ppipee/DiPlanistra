import styled, { css } from 'styled-components'

import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${spaces(12)};
`

type ArrowProps = {
	$back?: boolean
	$disabled?: boolean
}

const applyDisableStyle = ({ $disabled = false }: ArrowProps) =>
	$disabled &&
	css`
		pointer-events: none;
		color: ${gray[200]};
	`

export const ArrowWrapper = styled.div<ArrowProps>`
	cursor: pointer;
	margin: auto 0;
	color: ${gray[500]};

	${({ $back }) =>
		$back &&
		css`
			transform: rotate(180deg);
		`}

	& > svg {
		display: flex;
		margin: auto;
	}

	${applyDisableStyle};
`
