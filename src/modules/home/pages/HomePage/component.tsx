import React from 'react'

import asRoute from 'core/router/hoc/asRoute'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import PhotosCarousel from 'common/components/PhotosCarousel'
import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import NearbyMe from 'modules/home/components/NearbyMe'
import RecommendForYou from 'modules/home/components/RecommendForYou'
import HomeStoreConfig from 'modules/home/stores/HomeStore'
import { useHomeStore } from 'modules/home/stores/HomeStore/context'
import NearbyPositionStoreConfig from 'modules/place/stores/NearbyPositionStore'

const HomePageComponent = () => {
	const { isDesktop } = useResponsive()

	const { placesHighlight, isFresh, isLoading } = useHomeStore((store) => ({
		placesHighlight: store.placesHighlight,
		isLoading: store.isLoading,
		isFresh: store.isFresh,
	}))

	if (isFresh || isLoading) return null

	return (
		<ContentContainer>
			<Gap $type="vertical" $size={isDesktop ? spaces(24) : '0'}>
				<PhotosCarousel places={placesHighlight} dotColor={white} />
				<RecommendForYou />
				<NearbyMe />
			</Gap>
		</ContentContainer>
	)
}

export default asRoute(HomePageComponent, {
	stores: {
		homeStore: HomeStoreConfig,
		nearbyPositionStore: NearbyPositionStoreConfig,
	},
})
