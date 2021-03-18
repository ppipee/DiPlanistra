import styled, { css } from 'styled-components'

import Position from 'common/components/Position'
import { white, main, green } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import { Spaces } from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

const MODAL_WIDTH = '312px'

type ModalProps = {
	$width?: string
}

export const BaseModalWrapper = styled(Position)<ModalProps>`
	width: ${MODAL_WIDTH};
	background: linear-gradient(to left, ${main[500]} 0%, ${green[500]} 100%);
	padding-top: ${Spaces[10]};
	border-radius: ${Borders.Large};

	${media.md`
  	border-radius: ${Borders.Large};
  `}

	${({ $width }) =>
		$width &&
		css`
			width: ${$width};
			min-width: ${MODAL_WIDTH};

			${media.md`
						width: ${MODAL_WIDTH};
					`}
		`}
`

export const BaseModal = styled.div`
	background-color: ${white};
	border-radius: ${Borders.Extra};

	${media.md`
  	border-radius: ${Borders.Big};
  `}
`
