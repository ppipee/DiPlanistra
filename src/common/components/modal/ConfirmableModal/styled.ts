import styled from 'styled-components'

import Gap from 'common/components/Gap'
import ModalTemplate from 'common/components/modal/ModalTemplate'
import spaces from 'common/styles/mixins/spaces'

export const Modal = styled(ModalTemplate)`
	padding: ${spaces(12)};
`

export const IconWrapper = styled.div`
	margin-left: auto;
`

export const ButtonContainer = styled(Gap)`
	margin-top: ${spaces(24)};
`
