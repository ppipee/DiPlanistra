import React, { useCallback } from 'react'

import ClickableBlock from 'common/components/ClickableBlock'
import SeparatorContainer from 'common/components/SeparatorContainer'
import { DomainValue } from 'common/constants/business'
import { gray } from 'common/styles/colors'

import { EventPreview } from 'modules/event/types'
import { PlaceSelectorProps } from 'modules/trip/components/PlaceSelector'
import { ActivityPlace } from 'modules/trip/types/planner'

import PlaceItem from '../PlaceItem'

import { PlaceListContainer } from './styled'

interface Props extends PlaceSelectorProps {
	close: () => void
	places: (ActivityPlace & EventPreview)[]
	domain: DomainValue
}

const PlaceList = ({ placeSelectedIndex, places, domain, setPlace, close }: Props) => {
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
