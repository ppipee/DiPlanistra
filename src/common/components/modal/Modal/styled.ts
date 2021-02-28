import styled from 'styled-components'

import Button from 'common/components/Button'
import ModalTemplate from 'common/components/modal/ModalTemplate'
import spaces from 'common/styles/mixins/spaces'
import { media } from 'common/styles/utils/viewport'

const BUTTON_DESKTOP_WIDTH = '140px'

export const BaseModal = styled(ModalTemplate)`
	padding: ${spaces(12)};
`

export const ButtonStyle = styled(Button)`
	width: ${BUTTON_DESKTOP_WIDTH};

	${media.md`
		width: auto;
		min-width: ${BUTTON_DESKTOP_WIDTH};
	`}
`
