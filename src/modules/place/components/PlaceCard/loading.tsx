import React from 'react'

import { range } from 'lodash'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import spaces from 'common/styles/mixins/spaces'

import PlaceDetailLoading from '../PlaceDetailCard/loading'

import { PlaceCardContainer, PlaceCoverImageLoading, PlaceImageLoading } from './styled'

type Props = {
	isHighlight?: boolean
}

const PlaceCardLoading = ({ isHighlight }: Props) => {
	return (
		<PlaceCardContainer>
			{isHighlight && <PlaceCoverImageLoading />}
			<ResponsiveBlock $padding={`${spaces(10)} ${spaces(12)}`}>
				<Gap $size={spaces(12)} $alignItems="stretch">
					{!isHighlight && <PlaceImageLoading />}
					<PlaceDetailLoading />
				</Gap>
			</ResponsiveBlock>
		</PlaceCardContainer>
	)
}

export const PlaceCardsLoading = () => (
	<>
		{range(3).map((i) => (
			<>
				<PlaceCardLoading key={`place-card-${i}-0`} isHighlight />
				<PlaceCardLoading key={`place-card-${i}-1`} isHighlight />
				<PlaceCardLoading key={`place-card-${i}-2`} />
			</>
		))}
	</>
)

export default PlaceCardLoading
