import React, { useEffect } from 'react'

import asRoute from 'core/router/hoc/asRoute'
import useQuery from 'core/router/hooks/useQuery'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import StickyContainer from 'common/components/StickyContainer'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'
import LinkToPlace from 'common/utils/url/LinkToPlace'

import PlaceCard from 'modules/place/components/PlaceCard'
import FavoritePlaceStoreConfig from 'modules/place/stores/FavoritePlaceStore'
import PlacesFilter from 'modules/search/components/PlacesFilter'
import SearchingText from 'modules/search/components/SearchingText'
import SearchStoreConfig from 'modules/search/stores/SearchStore'
import { useSearchStore } from 'modules/search/stores/SearchStore/context'

import { ContainerWrapper } from './styled'

const PlacesPageComponent = () => {
	const { isDesktop } = useResponsive()

	const { distance, domain, rating, categories, search, regions } = useQuery()
	const { places, isLoading, isFresh, getPlaces } = useSearchStore((store) => ({
		places: store.places,
		isLoading: store.isLoading,
		isFresh: store.isFresh,
		getPlaces: store.getPlaces,
	}))

	useEffect(() => {
		getPlaces({ distance, domain, rating, categories, search, regions })
	}, [distance, domain, rating, categories, search, regions])

	if (isFresh) return null

	return (
		<ContentContainer>
			<SearchingText />
			<Gap $size={spaces(16)}>
				{isDesktop && (
					<ContainerWrapper type="filter">
						<StickyContainer>
							<PlacesFilter />
						</StickyContainer>
					</ContainerWrapper>
				)}
				<ContainerWrapper type="main">
					<Gap $type="vertical" $size={spaces(12)}>
						{!isLoading
							? places.map((place) => (
									<LinkToPlace key={place.id} placeId={place.publicId}>
										<PlaceCard place={place} />
									</LinkToPlace>
							  ))
							: null}
					</Gap>
				</ContainerWrapper>
				{isDesktop && <ContainerWrapper type="sub" />}
			</Gap>
		</ContentContainer>
	)
}

export default asRoute(PlacesPageComponent, {
	stores: {
		searchStore: SearchStoreConfig,
		favoritePlaceStore: FavoritePlaceStoreConfig,
	},
})
