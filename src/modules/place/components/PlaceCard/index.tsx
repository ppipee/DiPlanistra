import React from 'react'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import spaces from 'common/styles/mixins/spaces'
import { Business } from 'common/types/wongnai/business'

import PlaceDetailCard from '../PlaceDetailCard'

import { PlaceCardContainer, PlaceCoverImage, PlaceImage } from './styled'

type Props = {
	place: Business
	favorite?: boolean
}

const PlaceCard = ({ place, favorite }: Props) => {
	const isHighlight = place.rating > 4

	return (
		<PlaceCardContainer>
			{isHighlight && place.defaultPhoto && <PlaceCoverImage src={place.defaultPhoto.largeUrl} />}
			<ResponsiveBlock $padding={`${spaces(10)} ${spaces(12)}`}>
				<Gap $size={spaces(12)}>
					{!isHighlight && place.defaultPhoto && <PlaceImage src={place.defaultPhoto.smallUrl} />}
					<PlaceDetailCard showDistance place={place} favorite={favorite} />
				</Gap>
			</ResponsiveBlock>
		</PlaceCardContainer>
	)
}

export default PlaceCard
