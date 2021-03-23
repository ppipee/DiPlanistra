import React, { memo, useEffect } from 'react'

import useHorizontalTabContext from 'common/components/HorizontalTab/hooks/useHorizontalTabContext'
import LinkToPlace from 'common/components/url/LinkToPlace'
import { DomainValue } from 'common/constants/business'
import useResponsive from 'common/styles/hooks/useResponsive'

import { PlacePreview } from 'modules/place/types/place'
import { NearbyPositionType } from 'modules/place/types/store'

import NearByCard from '../NearByCard'

import NearByCardContainerLoading from './loading'
import { Container, CardWrapper } from './styled'

type Props = {
	nearbyPlace: NearbyPositionType
	loading: boolean
	getPlaces: (domain: DomainValue) => void
}

const MAX_CARD_NUMBER = 14

const NearByCardContainer = ({ nearbyPlace, loading, getPlaces }: Props) => {
	const { activeTab } = useHorizontalTabContext()
	const { isDesktop } = useResponsive()

	useEffect(() => {
		getPlaces(activeTab as DomainValue)
	}, [activeTab])

	if (loading) return <NearByCardContainerLoading />

	const places: PlacePreview[] = nearbyPlace[activeTab]

	return (
		<Container>
			{(isDesktop ? places.slice(0, MAX_CARD_NUMBER) : places).map((place) => (
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
