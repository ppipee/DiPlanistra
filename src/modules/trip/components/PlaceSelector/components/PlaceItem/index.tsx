import React from 'react'

import { EventPreview } from 'modules/event/types'
import { ActivityPlace } from 'modules/trip/types/planner'

import PlacePreviewCard from '../PlacePreviewCard'

import { PlaceItemContainer } from './styled'

type Props = {
	place: ActivityPlace & EventPreview
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
