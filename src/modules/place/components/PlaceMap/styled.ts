import styled from 'styled-components'

import { main } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'

const MAP_SIZE = {
	width: '100%',
	height: '240px',
}

export const MapWrapper = styled.div`
	box-sizing: border-box;
	border: 3px solid ${main[300]};
	border-radius: ${Borders.Large};

	img {
		border-radius: ${Borders.Large};
	}

	width: ${MAP_SIZE.width};
	height: ${MAP_SIZE.height};
	max-width: 400px;
	margin: auto;
`
