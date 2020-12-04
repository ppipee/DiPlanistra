import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import PhotosCarousel from 'common/components/PhotosCarousel'
import { PLACE_HIGHLIGHTS } from 'common/mocks/plcaeHighlights/index'
import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import RecommendForYou from 'modules/home/components/RecommendForYou'
import NearByPosition from 'modules/place/components/NearByPosition'
import { YOU } from 'modules/user/locale'

const HomePageComponent = () => {
	const { isDesktop } = useResponsive()
	const I18n = useI18n()

	return (
		<ContentContainer>
			<Gap $type="vertical" $size={isDesktop ? spaces(24) : '0'}>
				<PhotosCarousel places={PLACE_HIGHLIGHTS} dotColor={white} />
				<RecommendForYou />
				<NearByPosition places={PLACE_HIGHLIGHTS} nearby={I18n.t(YOU)} />
			</Gap>
		</ContentContainer>
	)
}

export default HomePageComponent
