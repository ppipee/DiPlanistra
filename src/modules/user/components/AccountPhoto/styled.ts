import styled from 'styled-components'

import Borders from 'common/styles/mixins/borders'

export const PHOTO_SIZE = 32

export const ProfilePhoto = styled.img`
	border-radius: ${Borders.Circle};
	height: ${`${PHOTO_SIZE}px`};
	width: ${`${PHOTO_SIZE}px`};
`
