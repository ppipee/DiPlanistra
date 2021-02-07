import React from 'react'

import { ActivityPlace } from 'modules/trips/types/planner'

import PlacePreviewCard from '../PlacePreviewCard'

import { PlaceItemContainer } from './styled'

type Props = {
	place: ActivityPlace
	isSelected: boolean
}

const PlaceItem = ({ place, isSelected }: Props) => {
	return (
		<PlaceItemContainer $isSelected={isSelected}>
			<PlacePreviewCard place={place} />
		</PlaceItemContainer>
	)
}

export default PlaceItem
