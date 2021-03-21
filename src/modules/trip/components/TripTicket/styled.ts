import styled from 'styled-components'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray, green, main, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import spaces from 'common/styles/mixins/spaces'
import { blockShadow } from 'common/styles/shadows'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'
import { media } from 'common/styles/utils/viewport'

const DESKTOP_TICKET_HEIGHT = '148px'
const DESKTOP_TICKET_WIDTH = '436px'

const MOBILE_TICKET_HEIGHT = '108px'
const MOBILE_TICKET_WIDTH = '312px'

type TicketProps = {
	$expired?: boolean
}

export const TicketContainer = styled(Flex)`
	box-sizing: border-box;
	height: ${DESKTOP_TICKET_HEIGHT};
	width: ${DESKTOP_TICKET_WIDTH};

	${blockShadow}

	${media.md`
    height: ${MOBILE_TICKET_HEIGHT};
    width: ${MOBILE_TICKET_WIDTH};
  `}
`

export const MainTicketArea = styled(Gap)`
	box-sizing: border-box;
	border-radius: ${Borders.Default};
	background: ${white};
	height: 100%;
	flex: 1;
	padding: ${spaces(12)};
	border-right: 1px dashed ${gray[500]};
	${media.md`
		padding: ${spaces(8)};
	`};
`

export const TicketDetail = styled(Flex)<TicketProps>`
	padding: ${spaces(12)} ${spaces(12)} ${spaces(12)} ${spaces(16)};
	height: initial;
	flex: 1;
	border-radius: ${Borders.Default};
	color: ${white};
	background: ${({ $expired }) =>
		!$expired
			? `linear-gradient(238.64deg, ${getColorWithAlpha(main[500], 0.8)} 13.57%, ${green[500]} 90.33%)`
			: gray[200]};

	${media.md`
		padding: ${spaces(8)} ${spaces(8)} ${spaces(8)} ${spaces(12)};
	`}
`

export const SubTicketArea = styled(Flex)`
	box-sizing: border-box;
	height: 100%;
	background-color: ${white};
	position: relative;
	padding: ${spaces(32)};

	${media.md`
		padding: ${spaces(12)};
	`}
`

export const SideTextWrapper = styled(Text)`
	writing-mode: vertical-lr;
`

export const IdText = styled(Text)`
	position: absolute;
	top: 4px;
	right: 4px;
`
