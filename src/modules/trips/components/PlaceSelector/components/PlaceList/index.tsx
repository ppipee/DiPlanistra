import React, { useCallback } from 'react'

import ClickableBlock from 'common/components/ClickableBlock'
import SeparatorContainer from 'common/components/SeparatorContainer'
import { gray } from 'common/styles/colors'

import { PlaceSelectorProps } from 'modules/trips/components/PlaceSelector'

import PlaceItem from '../PlaceItem'

import { PlaceListContainer } from './styled'

interface Props extends PlaceSelectorProps {
	close: () => void
}

const PlaceList = ({ placeSelectedIndex, places, setPlace, close }: Props) => {
	const selectPlace = useCallback((placeIndex) => {
		setPlace(placeIndex)
		close()
	}, [])

	return (
		<PlaceListContainer>
			<SeparatorContainer $color={gray[200]}>
				{places.map((place, index) => (
					<ClickableBlock onClick={() => selectPlace(index)} key={`place-selector-item-${place.id}`}>
						<PlaceItem place={place} isSelected={placeSelectedIndex === index} />
					</ClickableBlock>
				))}
			</SeparatorContainer>
		</PlaceListContainer>
	)
}

export default PlaceList
