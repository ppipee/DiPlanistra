import React from 'react'

import asRoute from 'core/router/hoc/asRoute'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import LoadingModal from 'common/components/LoadingModal'
import PhotosCarousel from 'common/components/PhotosCarousel'
import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import CategoriesSelector from 'modules/home/components/CategoriesSelector'
import NearbyMe from 'modules/home/components/NearbyMe'
import RecommendForYou from 'modules/home/components/RecommendForYou'
import useCategoriesSelectorModalState from 'modules/home/hooks/useCategoriesSelectorModalState/index'
import HomeStoreConfig from 'modules/home/stores/HomeStore'
import { useHomeStore } from 'modules/home/stores/HomeStore/context'
import WelcomeStoreConfig from 'modules/home/stores/WelcomeStore'
import { useWelcomeStore } from 'modules/home/stores/WelcomeStore/context'
import NearbyPositionStoreConfig from 'modules/place/stores/NearbyPositionStore'

const HomePageComponent = () => {
	const { isDesktop } = useResponsive()
	const { isOpen, close } = useCategoriesSelectorModalState()
	const isSelectingCategories = useWelcomeStore((store) => store.isActionLoading['newCategories'])

	const isModalLoading = isSelectingCategories

	const { placesHighlight, isFresh, isLoading } = useHomeStore((store) => ({
		placesHighlight: store.placesHighlight,
		isLoading: store.isLoading,
		isFresh: store.isFresh,
	}))

	if (isFresh) return null

	return (
		<>
			<ContentContainer>
				<Gap $type="vertical" $size={isDesktop ? spaces(24) : '0'}>
					{!isLoading && placesHighlight && <PhotosCarousel places={placesHighlight} dotColor={white} arrows={false} />}
					<RecommendForYou />
					<NearbyMe />
				</Gap>
			</ContentContainer>
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
