import styled from 'styled-components'

import { main } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import { media } from 'common/styles/utils/viewport'

const MOBILE_SIZE = {
	width: '100%',
	height: '240px',
}

const DESKTOP_SIZE = {
	width: '400px',
	height: '300px',
}

export const MapWrapper = styled.div`
	box-sizing: border-box;
	border: 3px solid ${main[300]};
	border-radius: ${Borders.Large};

	img {
		border-radius: ${Borders.Large};
	}

	width: ${DESKTOP_SIZE.width};
	height: ${DESKTOP_SIZE.height};

	${media.md`
    width:${MOBILE_SIZE.width};
    height:${MOBILE_SIZE.height};
  `}
`
