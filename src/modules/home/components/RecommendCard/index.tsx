import React from 'react'

import { Shadow } from 'common/components/BlockShadow/types'

import PlaceDetailCard from 'modules/place/components/PlaceDetailCard'
import { PlacePreview } from 'modules/place/types/place'

import { CardContainer, CardImage, CardDetailWrapper } from './styled'

type Props = {
	place: PlacePreview
	favorite?: boolean
}

const RecommendCard = ({ place, favorite }: Props) => (
	<CardContainer $variant={Shadow.Hard}>
		<CardImage src={place.defaultPhoto.smallUrl} />
		<CardDetailWrapper>
			<PlaceDetailCard place={place} favorite={favorite} />
		</CardDetailWrapper>
	</CardContainer>
)

export default RecommendCard
