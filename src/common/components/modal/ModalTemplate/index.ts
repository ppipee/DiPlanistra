import styled, { css } from 'styled-components'

import Position from 'common/components/Position'
import { PositionTypes } from 'common/components/Position/types'
import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import ZIndexes from 'common/styles/mixins/zIndexes'

const MODAL_WIDTH = '312px'

type ModalProps = {
	$width?: string
}

const ModalTemplate = styled(Position).attrs({
	$position: PositionTypes.Fixed,
	$center: true,
	$zIndex: ZIndexes.NormalPriorityModal,
})<ModalProps>`
	background-color: ${white};
	border-radius: ${Borders.Large};
	box-sizing: border-box;

	${({ $width }) =>
		$width
			? css`
					width: ${$width};
					min-width: ${MODAL_WIDTH};
			  `
			: css`
					width: ${MODAL_WIDTH};
			  `};
`

export default ModalTemplate
