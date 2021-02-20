import styled from 'styled-components'

import Borders from 'common/styles/mixins/borders'

const IMG_SIZE = '80px'

export const PlaceImage = styled.img`
	width: ${IMG_SIZE};
	height: ${IMG_SIZE};
	border-radius: ${Borders.Normal};
	object-fit: cover;
`
