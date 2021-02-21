import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import CityIcon from 'common/components/icons/CityIcon'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Text from 'common/components/Text'
import { DAY, NIGHT } from 'common/locale'
import { gray } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'

import BookmarkTripIcon from 'modules/search/components/BookmarkTripIcon'
import { LOCALE_VIEW, LOCALE_SHARE } from 'modules/search/locale'
import { PlannerPreview } from 'modules/trip/types/planner'

import { DATE } from '../../locale'

import { CardContent, CardHeader, FullText } from './styled'

type Props = {
	trip: PlannerPreview
}

const ICON_SIZE = 16

const TripCard = ({ trip }: Props) => {
	const I18n = useI18n()
	const { titleSize, detailSize, subDetailSize } = useFontSizeResponsive()

	const summaryDate =
		trip.dateLength > 0
			? `${I18n.t(DAY, { day: trip.dateLength })} ${I18n.t(NIGHT, { night: trip.dateLength - 1 })}`
			: `${I18n.t(DAY, { day: trip.dateLength })}`

	return (
		<ResponsiveBlock>
			<CardHeader>
				<Gap $size={spaces(8)}>
					<FullText ellipsis={2} size={titleSize}>
						{trip.name}
					</FullText>
					<BookmarkTripIcon plannerId={trip.id} isBookmark={trip.isBookmark} />
				</Gap>
			</CardHeader>
			<CardContent>
				<Gap $size={spaces(4)} className="margin-bottom-4" $alignItems="center">
					<CityIcon size={ICON_SIZE} color={gray[700]} />
					<FullText ellipsis={2} color={gray[700]} size={subDetailSize}>
						{trip.name}
					</FullText>
				</Gap>
				<Text as="div" size={detailSize} ellipsis={1}>
					<Flex className="margin-bottom-12" $direction="column" $alignItems="stretch">
						{trip.planners.slice(0, 3).map((planner) => (
							<div key={`${trip.id}-planner-${planner.day}`}>{`${I18n.t(DATE, { date: planner.day })} - ${
								planner.activities
							}`}</div>
						))}
						{trip.planners.length > 3 && <span>...</span>}
					</Flex>
				</Text>
				<Text as="div" size={subDetailSize} color={gray[700]}>
					<Gap $justifyContent="space-between" $size={spaces(8)}>
						<span>{summaryDate}</span>
						<Gap $size={spaces(4)}>
							<span>{I18n.t(LOCALE_VIEW, { view: trip.numberOfViews })}</span>
							<span>{I18n.t(LOCALE_SHARE, { share: trip.numberOfBookmarks })}</span>
							<span>-</span>
							<span>{trip.writer.name}</span>
						</Gap>
					</Gap>
				</Text>
			</CardContent>
		</ResponsiveBlock>
	)
}

export default TripCard
