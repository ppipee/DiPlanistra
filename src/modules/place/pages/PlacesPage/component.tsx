import React, { useEffect } from 'react'

import { isEmpty } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'
import asRoute from 'core/router/hoc/asRoute'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import StickyContainer from 'common/components/StickyContainer'
import Text from 'common/components/Text'
import LinkToPlace from 'common/components/url/LinkToPlace'
import { gray } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import PlaceCard from 'modules/place/components/PlaceCard'
import { PlaceCardsLoading } from 'modules/place/components/PlaceCard/loading'
import { PLACE_EMPTY } from 'modules/place/locale'
import FavoritePlaceStoreConfig from 'modules/place/stores/FavoritePlaceStore'
import DomainSelector from 'modules/search/components/DomainSelector'
import PlacesFilter from 'modules/search/components/PlacesFilter'
import SearchingText from 'modules/search/components/SearchingText'
import SearchPlaceStoreConfig from 'modules/search/stores/SearchPlaceStore'
import { useSearchPlaceStore } from 'modules/search/stores/SearchPlaceStore/context'

import { ContainerWrapper, Container } from './styled'

const PlacesPageComponent = () => {
	const I18n = useI18n()
	const { isDesktop } = useResponsive()

	const { distance, domain, rating, categories, search, regions } = useQuery()
	const { places, isLoading, isFresh, getPlaces } = useSearchPlaceStore((store) => ({
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
		<Container>
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
					<Gap $type="vertical" $size={spaces(12)}>
						{isLoading ? (
							<PlaceCardsLoading />
						) : !isEmpty(places) ? (
							places.map((place) => (
								<LinkToPlace key={place.id} placeId={place.publicId}>
									<PlaceCard place={place} />
								</LinkToPlace>
							))
						) : (
							<Text as="div" className="margin-top-48" textAlign="center" color={gray[500]} size={fontSizes(24)}>
								{I18n.t(PLACE_EMPTY)}
							</Text>
						)}
					</Gap>
				</ContainerWrapper>
				{/* {isDesktop && <ContainerWrapper type="sub" />} */}
			</Gap>
		</Container>
	)
}

export default asRoute(PlacesPageComponent, {
	stores: {
		searchPlaceStore: SearchPlaceStoreConfig,
		favoritePlaceStore: FavoritePlaceStoreConfig,
	},
})
