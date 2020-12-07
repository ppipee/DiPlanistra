import React from 'react'

import { Shadow } from 'common/components/BlockShadow/types'
import { Business } from 'common/types/wongnai/business'

import PlaceDetailCard from 'modules/place/components/PlaceDetailCard'

import { CardContainer, CardImage, CardDetailWrapper } from './styled'

type Props = {
	place: Business
	favorite?: boolean
}

const RecommendCard = ({ place, favorite }: Props) => (
	<CardContainer $variant={Shadow.Hard}>
		<CardImage src={(place.defaultPhoto || place.mainPhoto).smallUrl} />
		<CardDetailWrapper>
			<PlaceDetailCard place={place} favorite={favorite} />
		</CardDetailWrapper>
	</CardContainer>
)

export default RecommendCard
