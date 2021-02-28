import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Text from 'common/components/Text'
import LinkToPlace from 'common/components/url/LinkToPlace'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import useFetchRecommendPlaces from 'modules/home/hooks/useFetchRecommendPlaces'
import { useUserStore } from 'modules/user/stores/UserStore/context'

import RecommendCard from '../RecommendCard'

import { RECOMMEND_TITLE } from './locale'
import { RecommendContainer, CardsContainer } from './styled'

const RecommendForYou = () => {
	const I18n = useI18n()
	const { isLoading, recommendPlaces } = useFetchRecommendPlaces()
	const user = useUserStore((store) => store.user)

	if (!user) return null

	return (
		<RecommendContainer>
			<Text margin={`${spaces(16)} ${spaces(16)} 0`} size={fontSizes(20)}>
				{I18n.t(RECOMMEND_TITLE)}
			</Text>
			<CardsContainer $size={spaces(4)}>
				{!isLoading && recommendPlaces
					? recommendPlaces.map((place) => (
							<LinkToPlace placeId={place.publicId} key={`recommend-place-${place.publicId}`}>
								<RecommendCard place={place} />
							</LinkToPlace>
					  ))
					: null}
			</CardsContainer>
		</RecommendContainer>
	)
}

export default RecommendForYou
