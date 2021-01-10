import React from 'react'

import { PlacePreview } from 'modules/place/types/place'

import PlacePreviewCard from '../PlacePreviewCard'

import { PlaceItemContainer } from './styled'

type Props = {
	place: PlacePreview
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
