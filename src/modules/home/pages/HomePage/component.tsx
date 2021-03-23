import React from 'react'

import asRoute from 'core/router/hoc/asRoute'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import LoadingModal from 'common/components/LoadingModal'
import PhotosCarousel from 'common/components/PhotosCarousel'
import { PLACE_HIGHLIGHTS } from 'common/mocks/plcaeHighlights'
import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import CategoriesSelector from 'modules/home/components/CategoriesSelector'
import NearbyMe from 'modules/home/components/NearbyMe'
import RecommendForYou from 'modules/home/components/RecommendForYou'
import useCategoriesSelectorModalState from 'modules/home/hooks/useCategoriesSelectorModalState/index'
import useHomeError from 'modules/home/hooks/useHomeError'
import HomeStoreConfig from 'modules/home/stores/HomeStore'
import { useHomeStore } from 'modules/home/stores/HomeStore/context'
import WelcomeStoreConfig from 'modules/home/stores/WelcomeStore'
import { useWelcomeStore } from 'modules/home/stores/WelcomeStore/context'
import ErrorPage from 'modules/notFound/pages/ErrorPage'
import NearbyPositionStoreConfig from 'modules/place/stores/NearbyPositionStore'

const HomePageComponent = () => {
	const { isDesktop } = useResponsive()
	const { isOpen, close } = useCategoriesSelectorModalState()
	const isSelectingCategories = useWelcomeStore((store) => store.isActionLoading['newCategories'])

	const isModalLoading = isSelectingCategories

	const { placesHighlight = PLACE_HIGHLIGHTS, isFresh, isLoading } = useHomeStore((store) => ({
		placesHighlight: store.placesHighlight,
		isLoading: store.isLoading,
		isFresh: store.isFresh,
	}))

	const error = useHomeError()

	if (error) return <ErrorPage errorMessage={error?.message} />
	if (isFresh) return null

	return (
		<>
			<div>
				{!isLoading && placesHighlight && <PhotosCarousel places={placesHighlight} dotColor={white} arrows={false} />}
				<ContentContainer className={isDesktop ? 'margin-top-24' : ''}>
					<Gap $type="vertical" $size={isDesktop ? spaces(24) : '0'}>
						<RecommendForYou />
						<NearbyMe />
					</Gap>
				</ContentContainer>
			</div>
			{isOpen && <CategoriesSelector onClose={close} />}
			{isModalLoading && <LoadingModal />}
		</>
	)
}

export default asRoute(HomePageComponent, {
	stores: {
		homeStore: HomeStoreConfig,
		nearbyPositionStore: NearbyPositionStoreConfig,
		welcomeStore: WelcomeStoreConfig,
	},
})
