import styled from 'styled-components'

import Borders from 'common/styles/mixins/borders'

const IMG_SIZE = '100px'

export const PlaceImage = styled.img`
	display: block;
	object-fit: cover;
	height: ${IMG_SIZE};
	width: ${IMG_SIZE};
	border-radius: ${Borders.Large};
`
