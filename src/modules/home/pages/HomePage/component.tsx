import React from 'react'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import PhotosCarousel from 'common/components/PhotosCarousel'
import { PLACE_HIGHLIGHTS } from 'common/mocks/plcaeHighlights/index'
import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import NearByPosition from 'modules/home/components/NearByPosition'
import RecommendForYou from 'modules/home/components/RecommendForYou'

const HomePageComponent = () => {
	const { isDesktop } = useResponsive()

	return (
		<ContentContainer>
			<Gap $type="vertical" $size={isDesktop ? spaces(24) : '0'}>
				<PhotosCarousel places={PLACE_HIGHLIGHTS} dotColor={white} />
				<RecommendForYou />
				<NearByPosition />
			</Gap>
		</ContentContainer>
	)
}

export default HomePageComponent
