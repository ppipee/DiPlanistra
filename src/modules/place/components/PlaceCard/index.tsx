import React from 'react'

import Gap from 'common/components/Gap'
import spaces from 'common/styles/mixins/spaces'

import { PlacePreview } from 'modules/place/types/place'
import { ActivityPlace } from 'modules/trip/types/planner'

import PlaceDetailCard from '../PlaceDetailCard'

import { PlaceCardContainer, PlaceCoverImage, PlaceImage, PlaceDetailWrapper } from './styled'

type Props = {
	place: PlacePreview | ActivityPlace
	isHighlight?: boolean
}

const PlaceCard = ({ place, isHighlight }: Props) => {
	const isCardHighlight = place.rating > 4 || isHighlight

	return (
		<PlaceCardContainer>
			{isCardHighlight && place.defaultPhoto && <PlaceCoverImage src={place.defaultPhoto.largeUrl} loading="lazy" />}
			<PlaceDetailWrapper $padding={`${spaces(10)} ${spaces(12)}`}>
				<Gap $size={spaces(12)}>
					{!isCardHighlight && place.defaultPhoto && <PlaceImage src={place.defaultPhoto.smallUrl} loading="lazy" />}
					<PlaceDetailCard showDistance place={place as PlacePreview & ActivityPlace} />
				</Gap>
			</PlaceDetailWrapper>
		</PlaceCardContainer>
	)
}

export default PlaceCard
