import React from 'react'

import useLocale from 'core/locale/hooks/useLocale'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import ShareIcon from 'common/components/icons/ShareIcon'
import StarIcon from 'common/components/icons/StarIcon'
import TriangleIcon from 'common/components/icons/TriangleIcon'
import Text from 'common/components/Text'
import { gray, main, white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import getDateTimeFormat from 'common/utils/datetime/getDateTimeFormat'

import { PlannerPreview } from 'modules/trips/types/planner'

import { TicketContainer, MainTicketArea, TicketDetail, SubTicketArea, SideTextWrapper, IdText } from './styled'

type Props = {
	trip: PlannerPreview
}

const DATE_FORMAT = 'DD MMM YYYY HH:mm'
const ICON_SIZE = 36
const SUB_ICON_SIZE = 14

const TripTicket = ({ trip }: Props) => {
	const locale = useLocale()
	const { isDesktop } = useResponsive()
	const { name, dateLength, id, startDate: _startDate, endDate: _endDate, isPublic, shared, rating } = trip
	const startDate = getDateTimeFormat(_startDate, locale, DATE_FORMAT)
	const endDate = getDateTimeFormat(_endDate, locale, DATE_FORMAT)
	const stateText = isPublic ? 'public' : 'private'

	return (
		<TicketContainer>
			<MainTicketArea $size={spaces(4)}>
				<TicketDetail $direction="column" $justifyContent="space-between">
					<Text ellipsis={2} size={isDesktop ? fontSizes(18) : fontSizes(14)}>
						{name}
					</Text>
					<Flex $justifyContent="space-between" $responsive $alignItems="flex-end">
						<Text size={isDesktop ? fontSizes(14) : fontSizes(12)}>
							<div>{startDate}</div>
							<div>{endDate}</div>
						</Text>
						<Text size={isDesktop ? fontSizes(14) : fontSizes(12)} textAlign="right">
							<div>{stateText}</div>
							{isPublic && (
								<Gap $size={spaces(8)}>
									{rating > 0 && (
										<Gap $alignCenter $size={spaces(2)}>
											<StarIcon color={white} size={SUB_ICON_SIZE} />
											<span>{rating}</span>
										</Gap>
									)}
									{shared > 0 && (
										<Gap $alignCenter $size={spaces(2)}>
											<ShareIcon color={white} size={SUB_ICON_SIZE} />
											<span>{shared}</span>
										</Gap>
									)}
								</Gap>
							)}
						</Text>
					</Flex>
				</TicketDetail>
				<SideTextWrapper size={isDesktop ? fontSizes(12) : fontSizes(10)} color={gray[700]}>
					<Flex $justifyContent="space-between">
						<div>{`${dateLength}D`}</div>
						<div>{id.slice(0, 8)}</div>
					</Flex>
				</SideTextWrapper>
			</MainTicketArea>
			<SubTicketArea $alignItems="center">
				<IdText size={isDesktop ? fontSizes(12) : fontSizes(10)} color={gray[500]}>
					{id.slice(0, 8)}
				</IdText>
				<TriangleIcon size={ICON_SIZE} color={main[500]} />
			</SubTicketArea>
		</TicketContainer>
	)
}

export default TripTicket
