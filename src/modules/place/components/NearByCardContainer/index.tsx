import React, { memo, useEffect } from 'react'

import useHorizontalTabContext from 'common/components/HorizontalTab/hooks/useHorizontalTabContext'
import LinkToPlace from 'common/components/url/LinkToPlace'
import { DomainValue } from 'common/constants/business'

import { PlacePreview } from 'modules/place/types/place'
import { NearbyPositionType } from 'modules/place/types/store'

import NearByCard from '../NearByCard'

import { Container, CardWrapper } from './styled'

type Props = {
	nearbyPlace: NearbyPositionType
	loading: boolean
	getPlaces: (domain: DomainValue) => void
}

const NearByCardContainer = ({ nearbyPlace, loading, getPlaces }: Props) => {
	const { activeTab } = useHorizontalTabContext()

	useEffect(() => {
		getPlaces(activeTab as DomainValue)
	}, [activeTab])

	if (loading) return null

	const places: PlacePreview[] = nearbyPlace[activeTab]

	return (
		<Container>
			{places.map((place) => (
				<CardWrapper key={place.id}>
					<LinkToPlace placeId={place.publicId}>
						<NearByCard place={place} />
					</LinkToPlace>
				</CardWrapper>
			))}
		</Container>
	)
}

export default memo(NearByCardContainer)
