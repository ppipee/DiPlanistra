import React from 'react'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import spaces from 'common/styles/mixins/spaces'

import { PlacePreview } from 'modules/place/types/place'
import { ActivityPlace } from 'modules/trips/types/planner'

import PlaceDetailCard from '../PlaceDetailCard'

import { PlaceCardContainer, PlaceCoverImage, PlaceImage } from './styled'

type Props = {
	place: PlacePreview | ActivityPlace
	isHighlight?: boolean
}

const PlaceCard = ({ place, isHighlight }: Props) => {
	const isCardHighlight = place.rating > 4 || isHighlight

	return (
		<PlaceCardContainer>
			{isCardHighlight && place.defaultPhoto && <PlaceCoverImage src={place.defaultPhoto.largeUrl} />}
			<ResponsiveBlock $padding={`${spaces(10)} ${spaces(12)}`}>
				<Gap $size={spaces(12)}>
					{!isCardHighlight && place.defaultPhoto && <PlaceImage src={place.defaultPhoto.smallUrl} />}
					<PlaceDetailCard showDistance place={place as PlacePreview & ActivityPlace} />
				</Gap>
			</ResponsiveBlock>
		</PlaceCardContainer>
	)
}

export default PlaceCard
