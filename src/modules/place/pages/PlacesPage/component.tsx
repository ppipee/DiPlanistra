import React, { useEffect } from 'react'

import asRoute from 'core/router/hoc/asRoute'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import StickyContainer from 'common/components/StickyContainer'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import PlaceCardList from 'modules/place/components/PlaceCardList'
import FavoritePlaceStoreConfig from 'modules/place/stores/FavoritePlaceStore'
import DomainSelector from 'modules/search/components/DomainSelector'
import DomainTabsMobile from 'modules/search/components/DomainTabsMobile'
import PlacesFilter from 'modules/search/components/PlacesFilter'
import SearchingText from 'modules/search/components/SearchingText'
import SearchPlaceStoreConfig from 'modules/search/stores/SearchPlaceStore'
import { useSearchPlaceStore } from 'modules/search/stores/SearchPlaceStore/context'

import { ContainerWrapper, Container } from './styled'

const PlacesPageComponent = () => {
	const { isDesktop } = useResponsive()

	const { distance, domain, rating, categories, search, regions } = useQuery()
	const { getPlaces } = useSearchPlaceStore((store) => ({
		getPlaces: store.getPlaces,
	}))

	useEffect(() => {
		getPlaces({ distance, domain, rating, categories, search, regions })
	}, [distance, domain, rating, categories, search, regions])

	return (
		<Container>
			<DomainTabsMobile domain={domain}>
				<SearchingText />
				<Gap $size={spaces(16)}>
					{isDesktop && (
						<ContainerWrapper type="filter">
							<StickyContainer>
								<Gap $type="vertical" $size={spaces(12)}>
									<ResponsiveBlock $padding={spaces(12)}>
										<DomainSelector />
									</ResponsiveBlock>
									<PlacesFilter />
								</Gap>
							</StickyContainer>
						</ContainerWrapper>
					)}
					<ContainerWrapper type="main">
						<PlaceCardList />
					</ContainerWrapper>
					{/* {isDesktop && <ContainerWrapper type="sub" />} */}
				</Gap>
			</DomainTabsMobile>
		</Container>
	)
}

export default asRoute(PlacesPageComponent, {
	stores: {
		searchPlaceStore: SearchPlaceStoreConfig,
		favoritePlaceStore: FavoritePlaceStoreConfig,
	},
})
