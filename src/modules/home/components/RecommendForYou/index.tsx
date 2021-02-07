import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Text from 'common/components/Text'
import { PLACE_HIGHLIGHTS } from 'common/mocks/plcaeHighlights'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import LinkToPlace from 'common/utils/url/LinkToPlace'

import RecommendCard from '../RecommendCard'

import { RECOMMEND_TITLE } from './locale'
import { RecommendContainer, CardsContainer } from './styled'

const RecommendForYou = () => {
	const I18n = useI18n()

	return (
		<RecommendContainer>
			<Text margin={`${spaces(16)} ${spaces(16)} 0`} size={fontSizes(20)}>
				{I18n.t(RECOMMEND_TITLE)}
			</Text>
			<CardsContainer $size={spaces(4)}>
				{PLACE_HIGHLIGHTS.map((place) => (
					<LinkToPlace placeId={place.publicId} key={`recommend-place-${place.publicId}`}>
						<RecommendCard place={place} />
					</LinkToPlace>
				))}
			</CardsContainer>
		</RecommendContainer>
	)
}

export default RecommendForYou
