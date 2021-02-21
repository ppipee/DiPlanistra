import React from 'react'

import FullText from 'common/components/FullText'
import Gap from 'common/components/Gap'
import CalendarIcon from 'common/components/icons/CalendarIcon'
import LocationIcon from 'common/components/icons/LocationIcon'
import TagIcon from 'common/components/icons/TagIcon'
import Text from 'common/components/Text'
import { gray, white } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import { Spaces } from 'common/styles/mixins/spaces'

import { EventPreview } from 'modules/event/types'
import FavoriteEventIcon from 'modules/search/components/FavoriteEventIcon'

import { CardContainer, ImageCover, CardContent, CardHeader } from './styled'

type Props = {
	event: EventPreview
}

const ICON_SIZE = 14

const EventCard = ({ event }: Props) => {
	const { subTitleSize, subDetailSize } = useFontSizeResponsive()

	return (
		<CardContainer>
			{event.thumbnailUrl ? (
				<ImageCover src={event.thumbnailUrl} />
			) : (
				<CardHeader>
					<Gap $size={Spaces[8]}>
						<FullText weight="bold" color={white} size={subTitleSize} ellipsis={2}>
							{event.name}
						</FullText>
						<FavoriteEventIcon defaultColor={white} eventId={event.eventId} isFavorite={event.isFavorite} />
					</Gap>
				</CardHeader>
			)}
			<CardContent>
				{event.thumbnailUrl && (
					<Gap $size={Spaces[8]}>
						<FullText weight="bold" size={subTitleSize} color={gray[900]} ellipsis={2}>
							{event.name}
						</FullText>
						<FavoriteEventIcon eventId={event.eventId} isFavorite={event.isFavorite} />
					</Gap>
				)}
				{event.introduction && (
					<Text className="margin-bottom-8" size={subDetailSize} color={gray[700]} ellipsis={4}>
						{event.introduction}
					</Text>
				)}
				{event.location && (
					<Gap $size={Spaces[4]} $alignItems="center">
						<LocationIcon size={ICON_SIZE} color={gray[600]} />
						<FullText size={subDetailSize} color={gray[600]}>
							{event.location}
						</FullText>
					</Gap>
				)}
				<Gap $size={Spaces[4]} $alignItems="center">
					<CalendarIcon size={ICON_SIZE} color={gray[600]} />
					<FullText size={subDetailSize} color={gray[600]}>
						{event.periodDate}
					</FullText>
				</Gap>
				{event.tags && (
					<Gap $size={Spaces[4]} $alignItems="center">
						<TagIcon size={ICON_SIZE} color={gray[600]} />
						<FullText size={subDetailSize} color={gray[600]}>
							{event.tags.join(', ')}
						</FullText>
					</Gap>
				)}
			</CardContent>
		</CardContainer>
	)
}

export default EventCard
