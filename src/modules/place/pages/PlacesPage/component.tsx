import React, { useEffect } from 'react'

import asRoute from 'core/router/hoc/asRoute'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import StickyContainer from 'common/components/StickyContainer'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import ErrorPage from 'modules/notFound/pages/ErrorPage'
import PlaceCardList from 'modules/place/components/PlaceCardList'
import FavoritePlaceStoreConfig from 'modules/place/stores/FavoritePlaceStore'
import DomainSelector from 'modules/search/components/DomainSelector'
import DomainTabsMobile from 'modules/search/components/DomainTabsMobile'
import PlaceCategoriesSelector from 'modules/search/components/PlaceCategoriesSelector'
import PlacesFilter from 'modules/search/components/PlacesFilter'
import SearchingText from 'modules/search/components/SearchingText'
import useSearchError from 'modules/search/hooks/useSearchError/index'
import CategoryModalStoreConfig from 'modules/search/stores/CategoryModalStore'
import { useCategoryModalStore } from 'modules/search/stores/CategoryModalStore/context'
import SearchPlaceStoreConfig from 'modules/search/stores/SearchPlaceStore'
import { useSearchPlaceStore } from 'modules/search/stores/SearchPlaceStore/context'

import { ContainerWrapper, Container } from './styled'

const PlacesPageComponent = () => {
	const { isDesktop } = useResponsive()

	const { distance, domain, rating, categories, search, regions } = useQuery()
	const { getPlaces } = useSearchPlaceStore((store) => ({
		getPlaces: store.getPlaces,
	}))
	const { isCategoryModalOpen, closeCategoryModal } = useCategoryModalStore((store) => ({
		isCategoryModalOpen: store.isOpen,
		closeCategoryModal: store.close,
	}))

	const error = useSearchError()

	useEffect(() => {
		getPlaces({ distance, domain, rating, categories, search, regions })
	}, [distance, domain, rating, categories, search, regions])

	if (error) return <ErrorPage errorMessage={error?.message} />

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
			{isCategoryModalOpen && <PlaceCategoriesSelector onClose={closeCategoryModal} />}
		</Container>
	)
}

export default asRoute(PlacesPageComponent, {
	stores: {
		searchPlaceStore: SearchPlaceStoreConfig,
		favoritePlaceStore: FavoritePlaceStoreConfig,
		categoryModalStore: CategoryModalStoreConfig,
	},
})
