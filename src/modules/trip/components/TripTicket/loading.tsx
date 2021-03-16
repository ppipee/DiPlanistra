import React from 'react'

import TriangleIcon from 'common/components/icons/TriangleIcon'
import Skeleton from 'common/components/Skeleton'
import Text from 'common/components/Text'
import { main, white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { TicketContainer, MainTicketArea, TicketDetail, SubTicketArea } from './styled'

const ICON_SIZE = 36

const TripTicketLoading = () => {
	const { isDesktop } = useResponsive()

	return (
		<TicketContainer>
			<MainTicketArea $size={spaces(4)}>
				<TicketDetail $direction="column" $justifyContent="space-between">
					<Text size={isDesktop ? fontSizes(18) : fontSizes(14)} color={white}>
						<Skeleton width="240px" />
					</Text>
					<Text size={isDesktop ? fontSizes(14) : fontSizes(12)}>
						<Skeleton width="150px" count={2} />
					</Text>
				</TicketDetail>
			</MainTicketArea>
			<SubTicketArea $alignItems="center">
				<TriangleIcon size={ICON_SIZE} color={main[500]} />
			</SubTicketArea>
		</TicketContainer>
	)
}

export default TripTicketLoading
